import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../../context/ChatContext";
import ChatMessage from './ChatMessage';
import { db } from "../../../utils/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import '../chat-style.scss';

// Messages in a chat conversation
const ChatMessages = () => {
    const [messages, setMessages] = useState([]);  // Hold messages state
    const { data } = useContext(ChatContext);  // Access chat data from context

    useEffect(() => {
        // Subscribe to messages from the Firestore document
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        // Unsubscribe from Firestore on component cleanup
        return () => {
            unSub();
        };
    }, [data.chatId]);  // Run effect on chatId change

    // Log messages for debugging
    console.log("Messages from ChatMessages.jsx")
    console.log(messages)

    return (
        <div className="messages">
            {/* Map through messages and render a ChatMessage for each */}
            {messages.map((m) => (
                <ChatMessage message={m} key={m.id} />
            ))}
        </div>
    );
}

export default ChatMessages
