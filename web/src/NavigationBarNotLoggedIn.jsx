import React from "react";
import { Outlet, Link } from "react-router-dom";

//Navigation bar for when the user is not logged in
function NavigationBarNotLoggedIn() {
    return (

        <div>
            <div className="navigation-bar-container">

                {/*NOTE: CSS for links is in "index.css"*/}
                <Link className="link" to='/homePage'>DevLink Marketplace</Link>

                <div className="navigation-links-container">
                    <Link className="link" to='/chat'>Chat</Link>
                    {/* <Link className="link" to='/findDev'>Find DEV</Link> */}
                    <Link className="link" to='/findJobs'>Find Jobs</Link>
                    <Link className="link" to='/login'>Login</Link>
                    <Link className="link" to='/signUp'>Create Account</Link>
                </div>
            </div>

            {/* Outlet contains all the routes, specified in App.js */}
            <Outlet />

        </div>


    );
}

export default NavigationBarNotLoggedIn