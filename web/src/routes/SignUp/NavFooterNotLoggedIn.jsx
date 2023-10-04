import React from "react";
import NavigationBarNotLoggedIn from "../../NavigationBarNotLoggedIn";
import Footer from "../../Footer";
import '../../NavFooter.css'

// Navigation footer for when the user is not logged in
function NavFooterNotLoggedIn() {
    return (
        <div className="page-container">
            <div className="content-wrap">
                <NavigationBarNotLoggedIn />
            </div>

            <Footer />
        </div>
    )
}

export default NavFooterNotLoggedIn