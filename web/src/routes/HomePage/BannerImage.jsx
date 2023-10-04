import React from 'react';
import './BannerImage.css';

//Banner image for the Home Page
function BannerImage(props) {
    return (
        <div className='banner-image-div'>
            <img src={props.src} alt="" />
        </div>
    )
}

export default BannerImage