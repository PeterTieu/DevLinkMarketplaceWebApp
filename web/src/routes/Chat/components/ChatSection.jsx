import React, { useContext } from "react";
import '../chat-style.scss';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { ChatContext } from "../../../context/ChatContext";

// Section containing the main components of a conversation
const ChatSection = () => {

    const { data } = useContext(ChatContext);  // Access chat data from context

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                </div>
            </div>
            <ChatMessages />
            <ChatInput />
        </div>
    );
}

export default ChatSection
