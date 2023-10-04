import React, { useState } from 'react'
import './Field.css'
import Prompt from './Prompt'
import SingleLineTextInput from './SingleLineTextInput'

// "Title/Position" field for the Post Job page
const TitlePositionField = (props) => {
    return (
        <div className='field-div'>
            <Prompt text="Title/Position" />
            <SingleLineTextInput
                titlePosition={props.titlePosition}
                onTitlePositionChange={props.onTitlePositionChange} />
        </div>
    )
}


export default TitlePositionField