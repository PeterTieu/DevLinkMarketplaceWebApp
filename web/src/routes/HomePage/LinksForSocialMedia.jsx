import React from 'react';
import './LinksForSocialMedia.css';
import SubHeading from '../../general_components/SubHeading';
import ImageLink from './ImageLink';
import iconFacebook from '../../images/icon-facebook.png'
import iconTwitter from '../../images/icon-twitter.png'
import iconInstagram from '../../images/icon-instagram.png'

//Section in the Footer containing Social media image links
function LinksForSocialMedia(props) {
    return (
        <div className='links-for-social-media-div'>
            <SubHeading
                text="Stay Connected"
            />

            <div className='links-container'>
                <ImageLink
                    imageSrc={iconFacebook}
                    href="https://www.facebook.com/"
                />
                <ImageLink
                    imageSrc={iconTwitter}
                    href="https://twitter.com/"
                />
                <ImageLink
                    imageSrc={iconInstagram}
                    href="https://www.instagram.com/"
                />

            </div>
        </div>
    )

}

export default LinksForSocialMedia