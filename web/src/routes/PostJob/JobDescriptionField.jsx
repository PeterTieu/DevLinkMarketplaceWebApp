import React from 'react'
import './Field.css'
import Prompt from './Prompt'
import MultipleLineTextInput from './MultipleLineTextInput'

// "Job Description" field for the Post Job page
const JobDescriptionField = (props) => (
    <div className='field-div'>
        <Prompt text="Job Description" />
        <MultipleLineTextInput
            jobDescription={props.jobDescription}
            onJobDescriptionChange={props.onJobDescriptionChange}
            onSkillsChange={props.onSkillsChange}
        />
    </div>
)

export default JobDescriptionField