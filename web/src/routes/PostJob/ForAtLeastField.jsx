import React from 'react'
import './Field.css'
import Prompt from './Prompt'
import NumberInput from './NumberInput'

//"For At Least" field for the Post Job page
const ForAtLeastField = (props) => (
    <div className='field-div'>
        <Prompt text="For at least" />
        <NumberInput
            forAtLeast={props.forAtLeast}
            onForAtLeastChange={props.onForAtLeastChange} />
    </div>
)

export default ForAtLeastField