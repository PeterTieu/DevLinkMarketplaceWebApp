import React from 'react'
import './Section.css'
import SectionHeader from './SectionHeader'
import TitlePositionField from './TitlePositionField'
import JobDescriptionField from './JobDescriptionField'
import SkillsField from './SkillsField'

// Define a component for the "Describe Your Job" section of a form
const DescribeYourJobSection = (props) => {

    return (
        <div className='section new-job-sectton-div'>
            <SectionHeader text='Describe your job' />
            <div>
                <TitlePositionField
                    titlePosition={props.titlePosition}
                    onTitlePositionChange={props.onTitlePositionChange}
                />

                <JobDescriptionField
                    // value={props.jobDescription}
                    jobDescription={props.jobDescription}
                    onJobDescriptionChange={props.onJobDescriptionChange}
                />

                <SkillsField
                    // value={props.skills}
                    skills={props.skills}
                    onSkillsChange={props.onSkillsChange}
                />
            </div>
        </div>
    )
}

export default DescribeYourJobSection