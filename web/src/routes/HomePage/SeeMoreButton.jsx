import React from 'react'
import './SeeMoreButton.css'

//"See More" button
const SeeMoreButton = (props) => {
    return (
        <button className='see-more-button-div' type={props.type}>
            {props.text}
        </button>
    )
}

export default SeeMoreButton