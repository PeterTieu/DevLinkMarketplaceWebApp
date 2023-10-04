import React from 'react'
import './Field.css'
import Prompt from './Prompt'
import SingleLineTextInput from './SingleLineTextInput'

//"Experienced In" field for the Post Job page
const ExperiencedInField = (props) => (
    <div className='field-div'>
        <Prompt text="Experienced in" />
        <SingleLineTextInput
            experienceIn={props.experienceIn}
            onExperienceInChange={props.onExperienceInChange} />
    </div>
)

export default ExperiencedInField