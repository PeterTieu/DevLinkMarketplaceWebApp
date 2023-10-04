import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./context/user.context";
import { getAuth } from "firebase/auth";
import './NavigationBarNotLoggedIn.css'
import { AuthContext } from './context/ChatAuthContext';

// Navigation bar for when the user is not logged in
function NavigationBarLoggedIn() {

    const navigate = useNavigate()

    const auth = getAuth() //Obtain the signed-in/authenticated user

    //Define the logout function
    const logout = () => {
        auth.signOut(); //Sign out of the signed-in/authenticated user
        navigate('/') //Navigate to the first page (i.e., "Login" page)
    }

    //Obtain the current user from the UserContext (from user.context.jsx)
    const { currentUser } = useContext(UserContext)
    console.log("current user email: " + currentUser.email) //Print information of the current user to the console

    //Obtain the current chat user from the AuthContext (from ChatAuthContext.jsx)
    const { currentChatUser } = useContext(AuthContext)
    console.log(currentChatUser) //Print the currently logged in user

    return (

        <div>
            <div className="navigation-bar-container">

                {/*NOTE: CSS for links is in "index.css"*/}
                <Link className="link" to='/user/homePage'>DevLink Marketplace</Link>

                <div className="navigation-links-container">

                    {/* If the user is logged in, display their email.
                    Else, display "Not Logged in" */}
                    {currentUser ? (
                        <h3 className="single-line">
                            {"Logged in as "}
                            <br />
                            {currentUser.email}
                        </h3>
                    ) : (
                        "Not logged in"
                    )}

                    <Link className="link" to='/user/chat'>Chat</Link>
                    {/* <Link className="link" to='/user/findDev'>Find DEV</Link> */}
                    <Link className="link" to='/user/findJobs'>Find Jobs</Link>
                    <Link className="link" to='/user/postJob'>Post Job</Link>
                    {/* <Link className="link" to='/login'>Logout</Link> */}

                    <button className="link-style-button" onClick={logout}>Logout</button>
                </div>
            </div>

            {/* Outlet contains all the routes, specified in App.js */}
            <Outlet />

        </div>
    );
}

export default NavigationBarLoggedIn