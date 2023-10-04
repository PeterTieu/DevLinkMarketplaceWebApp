import React, { useEffect, useState } from 'react';
import ChatLogin from './ChatLogin';
import './chat-style.scss';

// Chat Login parent component
function Chat() {

    return (
        <div>
            <ChatLogin />
        </div>
    );
}

export default Chat