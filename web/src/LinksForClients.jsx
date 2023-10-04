import React from 'react';
import FooterLink from './FooterLink';
import SubHeading from './general_components/SubHeading';

// "For Clients" section of the Footer
function LinksForClients(props) {
    return (
        <div className='links-for-clients-div'>
            <SubHeading
                text="For Clients"
            />
            <FooterLink
                text="How it works"
                href=""
            />
            <FooterLink
                text="How to post a job"
                href=""
            />
            <FooterLink
                text="Find dev"
                href=""
            />
        </div>
    )

}

export default LinksForClients