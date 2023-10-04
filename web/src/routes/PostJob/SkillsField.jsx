import React from 'react'
import './Field.css'
import Prompt from './Prompt'
import MultipleLineTextInput from './MultipleLineTextInput'
import AnnotatedText from './AnnotatedText'

// "Skills" field for the Post Job page
const SkillsField = (props) => (
    <div className='field-div'>
        <Prompt text="Skills" />
        <MultipleLineTextInput
            skills={props.skills}
            placeholder='Please add the skills that your job requires, e.g., Java'
            onSkillsChange={props.onSkillsChange}
        />

        <div className='annotated-text-div'>
            <AnnotatedText text='Developers will find your job based on the skills you add here.' />
        </div>

    </div>
)

export default SkillsField