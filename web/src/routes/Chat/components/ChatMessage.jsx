import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../context/ChatAuthContext";
import { ChatContext } from "../../../context/ChatContext";

// A single Chat message sent by the user
const ChatMessage = ({ message }) => {

    const { currentChatUser } = useContext(AuthContext);  // Extracting the current user from Auth context
    const { data } = useContext(ChatContext);  // Extracting chat data from Chat context

    const ref = useRef();  // Creating a ref for message div

    useEffect(() => {
        // Automatically scroll to display the newest message
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);  // Effect runs when the message prop changes

    return (
        <div
            ref={ref}  // Applying the ref to our message div
            // Applying conditional class name based on sender
            className={`message ${message.senderId === currentChatUser.uid && "owner"}`}
        >
            <div className="messageInfo">  {/* Container for message info */}
                <img
                    // Conditionally render user photo based on sender
                    src={
                        message.senderId === currentChatUser.uid
                            ? currentChatUser.photoURL
                            : data.user.photoURL
                    }
                    alt=""
                />
                <span>just now</span>  {/* Placeholder text for time */}
            </div>
            <div className="messageContent">  {/* Container for message content */}
                <p>{message.text}</p>  {/* Display message text */}
                {/* Conditionally render image if it exists */}
                {message.img && <img src={message.img} alt="" />}
            </div>
        </div>
    );
}

export default ChatMessage
