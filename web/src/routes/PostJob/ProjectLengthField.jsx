import React from 'react'
import './Field.css'
import Prompt from './Prompt'
import NumberInput from './NumberInput'

// "Project Length" field for the Post Job page
const ProjectLengthField = (props) => (

    <div className='field-div'>
        <Prompt text="Project Length" />
        <NumberInput
            projectLength={props.projectLength}
            min="0"
            max="100"
            steps="0.5"
            onProjectLengthChange={props.onProjectLengthChange}
        />
    </div>
)

export default ProjectLengthField