import React from 'react'
import './Field.css'
import Prompt from './Prompt'
import NumberInput from './NumberInput'

// "Working Hours" field for the Post Job page
const WorkingHoursField = (props) => {

    return (
        <div className='field-div'>

            <Prompt text="Working Hours" />

            <NumberInput
                workingHours={props.workingHours}
                min="0"
                max="1000"
                step="0.5"
                onWorkingHoursChange={props.onWorkingHoursChange}
            />
        </div>
    )
}

export default WorkingHoursField