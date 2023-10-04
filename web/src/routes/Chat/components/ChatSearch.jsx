import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { AuthContext } from "../../../context/ChatAuthContext";
import '../chat-style.scss';

// Search bar for list of Chats
const ChatSearch = () => {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    const { currentChatUser } = useContext(AuthContext);

    const handleSearch = async () => {
        // Define the query for retrieving user data
        const q = query(collection(db, "users"), where("displayName", "==", username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);  // Handle error in case the user query fails
        }
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();  // Trigger search on "Enter" key press
    };

    const handleSelect = async () => {
        // Generate a combinedId for creating/retrieving chat data
        const combinedId = currentChatUser.uid > user.uid ? currentChatUser.uid + user.uid : user.uid + currentChatUser.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                // Creating a new chat document if it does not exist
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                // Updating userChats document for the current user
                await updateDoc(doc(db, "userChats", currentChatUser.uid), {
                    [combinedId + ".userInfo"]: user,
                    [combinedId + ".date"]: serverTimestamp(),
                });

                // Updating userChats document for the selected user
                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: currentChatUser,
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (err) {
        }

        setUser(null);
        setUsername("");
    };

    return (
        <div className='search'>
            <div className='searchForm'>
                <input
                    type="text"
                    placeholder="Find a user"
                    onKeyDown={handleKey}
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
            </div>
            {err && <span>User not found!</span>}
            {user && (
                <div className="userChat" onClick={handleSelect}>
                    <img src={user.photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>{user.displayName}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ChatSearch
