import React, { useEffect, useState } from 'react';
import './chat-style.scss'
import ChatSidebar from './components/ChatSideBar';
import ChatSection from './components/ChatSection';

// Home Page for the Chat feature - contains the main Chat components
const ChatHomePage = () => {

    return (
        <div className='home'>
            <div className='container'>
                <ChatSidebar />
                <ChatSection />
            </div>
        </div>
    )
}

export default ChatHomePage