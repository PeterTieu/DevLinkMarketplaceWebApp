import React from "react";
import NavigationBarLoggedIn from "../../NavigationBarLoggedIn";
import Footer from "../../Footer";

// Navigation footer for when the user is logged in
function NavFooterLoggedIn() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <NavigationBarLoggedIn />
            </div>

            <Footer />
        </div>
    )
}

export default NavFooterLoggedIn