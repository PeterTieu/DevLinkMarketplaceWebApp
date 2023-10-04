import React, { useState, useContext } from 'react';
import './chat-style.scss';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { AuthContext } from '../../context/ChatAuthContext';

// Chat account Login page
function ChatLogin() {

    const [err, setErr] = useState(false);  // State to handle and display any error

    const navigate = useNavigate();  // Hook for navigation

    const { setCurrentUser } = useContext(AuthContext)  // Access setCurrentUser from context

    // Define what happens when the submit button is pressed
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;  // Retrieve email from form
        const password = e.target[1].value;  // Retrieve password from form

        try {
            await signInWithEmailAndPassword(auth, email, password)  // Attempt to sign in with Firebase auth
            navigate('/chatHomePage')  // Navigate to the chat home page upon successful login
        } catch (err) {
            setErr(true)  // Set error state to true if login fails
        }
    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>DevLink Marketplace Chat</span>
                <span className='title'>Log In</span>
                <form onSubmit={handleSubmit}>
                    <input type='email' placeholder='Email'></input>
                    <input type='password' placeholder='Password'></input>
                    <button>Sign In</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Dont' have an account? <Link to="/chatRegister">Register</Link></p>
            </div>
        </div>
    );
}

export default ChatLogin
