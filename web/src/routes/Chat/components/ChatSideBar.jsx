import React from 'react';
import ChatNavbar from './ChatNavbar';
import '../chat-style.scss';
import ChatSearch from './ChatSearch';
import ChatList from './ChatList';

// Side bar of the Chat section
const ChatSidebar = () => {
    return (
        <div className='sidebar'>
            <ChatNavbar />
            <ChatSearch />
            <ChatList />

        </div>
    )
}

export default ChatSidebar