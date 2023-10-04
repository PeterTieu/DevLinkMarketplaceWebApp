import React, { useContext, useState } from "react";
import '../chat-style.scss';
import addImageIcon from '../../../images/add-image-icon.png'
import attachIcon from '../../../images/attach-icon.png'
import { AuthContext } from "../../../context/ChatAuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from "firebase/firestore";
import { db, storage } from "../../../utils/firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

// Input for the Chat - where the user types their message prior to sending
const ChatInput = () => {

    const [text, setText] = useState("");  // State for message text
    const [img, setImg] = useState(null);  // State for image to be sent

    const { currentChatUser } = useContext(AuthContext);  // Extracting the current chat user from context
    const { data } = useContext(ChatContext);  // Extracting chat data from context

    const handleSend = async () => {  // Function to handle message sending
        // If there's an image to send
        if (img) {
            const storageRef = ref(storage, uuid());  // Creating a reference in Firebase storage

            const uploadTask = uploadBytesResumable(storageRef, img);  // Uploading image to Firebase storage

            // Handling the upload task
            uploadTask.on(
                (error) => {
                    //TODO: Handle any upload error here
                },
                () => {
                    // Once the upload is complete, get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        // Update the chat document in Firestore with the new message data
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: currentChatUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            // If no image, just update the chat document with the text message
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currentChatUser.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        // Update the last message and date for the current user in the userChats collection
        await updateDoc(doc(db, "userChats", currentChatUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        // Update the last message and date for the other user in the userChats collection
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");  // Reset text input
        setImg(null);  // Reset image input
    };

    return (
        // UI for the message input
        <div className="input">
            {/* Text input for typing messages */}
            <input
                type="text"
                placeholder="Type something..."
                onChange={(e) => setText(e.target.value)}  // Update text state on input change
                value={text}  // Display current message text
            />
            <div className="send">
                {/* Attach icon - non-functional in this snippet */}
                <img src={attachIcon} alt="" />
                {/* File input for image selection - hidden by default */}
                <input
                    type="file"
                    style={{ display: "none" }}
                    id="file"
                    onChange={(e) => setImg(e.target.files[0])}  // Update img state with selected file
                />
                {/* Label for file input to customize appearance */}
                <label htmlFor="file">
                    <img src={addImageIcon} alt="" />
                </label>
                {/* Send button - triggers handleSend function */}
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default ChatInput
