import React from 'react';
import './NavigationBarLink.css';

function NavigationBarLink(props) {
    return (
        <div className='navigation-bar-link'>
            <a href={props.href}>{props.text}</a>
        </div>

    )

}

export default NavigationBarLink