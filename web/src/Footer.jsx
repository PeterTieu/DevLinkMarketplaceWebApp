import React from 'react';
import './Footer.css'
import LinksForDevelopers from './LinksForDevelopers';
import LinksForClients from './LinksForClients';
import LinksForSocialMedia from './routes/HomePage/LinksForSocialMedia';
import LinksForTermsAndConditions from './LinksForTermsAndConditions';

// Footer component
function Footer(props) {
    return (
        <div className='footer-div'>
            <br></br>
            <div className='common-links-container'>
                <LinksForDevelopers />
                <LinksForClients />
                <LinksForSocialMedia />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='terms-and-conditions-links-container'>
                <LinksForTermsAndConditions />
            </div>
            <br></br>

        </div>
    )

}

export default Footer