import React, { useEffect, useState } from 'react';
import './chat-style.scss';
import addImageIcon from '../../images/add-image-icon.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../utils/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from 'react-router-dom';

// Chat account registration page
function ChatRegister() {
    const [err, setErr] = useState(false); // State to handle and display errors

    const navigate = useNavigate(); // Hook to facilitate navigation between views

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value; // Retrieve display name from form
        const email = e.target[1].value; // Retrieve email from form
        const password = e.target[2].value; // Retrieve password from form
        const file = e.target[3].files[0]; // Retrieve file (avatar) from form

        try {
            // Attempt to create user with email and password using Firebase auth
            const res = await createUserWithEmailAndPassword(auth, email, password);

            // Create a reference to the file location in Cloud Storage
            const storageRef = ref(storage, displayName);

            // Start the resumable upload to Cloud Storage
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setErr(true) // Set error state to true if there's an upload error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        // Update profile information in Firebase auth
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });

                        // Create a new document in the "users" collection with user info
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });

                        // Create a new document in the "userChats" collection to store chat messages for the user
                        await setDoc(doc(db, "userChats", res.user.uid), {});

                        navigate("/chatLogin") // Navigate to the chat login page upon successful registration
                    });
                }
            );

        } catch (err) {
            setErr(true); // Set error state to true if registration fails
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">DevLink Marketplace Chat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="Display Name" />
                    <input required type="email" placeholder="Email" />
                    <input required type="password" placeholder="Password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={addImageIcon} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? <Link to="/chatLogin">Login</Link></p>
            </div>
        </div>
    );
}

export default ChatRegister