import React from 'react';
import './LinksForDevelopers.css';
import FooterLink from './FooterLink';
import SubHeading from './general_components/SubHeading';

// "For Dev" section of the Footer
function LinksForDevelopers(props) {
    return (
        <div className='links-for-developers-div'>
            <SubHeading
                text="For Dev"
            />

            <FooterLink
                text="How it works"
                href=""
            />
            <FooterLink
                text="How to create a profile"
                href=""
            />
            <FooterLink
                text="Find jobs"
                href=""
            />

        </div>
    )

}

export default LinksForDevelopers