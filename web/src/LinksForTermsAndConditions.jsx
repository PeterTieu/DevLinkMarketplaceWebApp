import React from 'react';
import './LinksForTermsAndConditions.css';
import FooterLink from './FooterLink';
import SubHeading from './general_components/SubHeading';

// "DEVLink" section of the Footer
function LinksForTermsAndConditions(props) {
    return (
        <div className='links-for-terms-and-conditions-div'>
            <SubHeading
                text="DEVLink"
            />

            <div className='links-container'>
                <FooterLink
                    text="Policy Privacy"
                    href=""
                />
                <FooterLink
                    text="Terms"
                    href=""
                />
                <FooterLink
                    text="Code of Conduct"
                    href=""
                />
            </div>

        </div>
    )

}

export default LinksForTermsAndConditions