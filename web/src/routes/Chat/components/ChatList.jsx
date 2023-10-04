import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/ChatAuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { db } from "../../../utils/firebase";
import './ChatList.css'

// List of existing conversations
const ChatList = () => {

    const [chats, setChats] = useState([]);  // State to hold chat data

    // Extracting the current user and dispatch function from context
    const { currentChatUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        // Function to retrieve chat data from Firestore
        const getChats = () => {
            // Subscribe to the userChats document for the current user
            const unsub = onSnapshot(doc(db, "userChats", currentChatUser.uid), (doc) => {
                // Update chats state with the data from Firestore
                setChats(doc.data());
            });

            // Unsubscribe from the document when the component is unmounted
            return () => {
                unsub();
            };
        };

        // Only call getChats if there is a user ID
        currentChatUser.uid && getChats();
    }, [currentChatUser.uid]);  // Dependency array for useEffect

    // Function to handle selecting a user from the chat list
    const handleSelect = (u) => {
        // Dispatch an action to change the user in context
        dispatch({ type: "CHANGE_USER", payload: u });
    };

    return (
        // Render the list of chats
        <div className="chats">
            {/* Map through the chats, sorting by date, and render UI for each */}
            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
                <div
                    className="userChat"  // CSS class for styling
                    key={chat[0]}  // Unique key for each chat
                    onClick={() => handleSelect(chat[1].userInfo)}  // Handle selecting a chat
                >
                    {/* Display the user's photo */}
                    <img src={chat[1].userInfo.photoURL} alt="" />
                    <div className="userChatInfo">  {/* Container for chat info */}
                        {/* Display the user's name */}
                        <span>{chat[1].userInfo.displayName}</span>
                        {/* Display the last message text */}
                        <p>{chat[1].lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChatList
