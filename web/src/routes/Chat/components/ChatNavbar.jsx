import React, { useContext } from 'react';
import '../chat-style.scss';
import { signOut } from 'firebase/auth';
import { auth } from '../../../utils/firebase';
import { AuthContext } from '../../../context/ChatAuthContext';
import { useNavigate } from 'react-router-dom';

// Navigation bar of the Chat - Contains information of the logged in user
const ChatNavbar = () => {

    const { currentChatUser } = useContext(AuthContext)  // Access user from context
    const navigate = useNavigate();  // Navigation hook from 'react-router-dom'

    console.log("Check currentChatUser from ChatNavbar")

    const handleClick = async (e) => {
        signOut(auth)  // Sign out the user using Firebase auth
        navigate('/chatLogin')  // Navigate user to the login page after logout
    };

    return (
        <div className='navbar'>
            <span className='logo'>Chat</span>
            <div className='user'>
                <img src={currentChatUser.photoURL} alt="" />
                <span>{currentChatUser.displayName}</span>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
}

export default ChatNavbar
