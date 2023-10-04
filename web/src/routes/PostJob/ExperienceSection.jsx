import React from 'react'
import './Section.css'
import SectionHeader from './SectionHeader'
import ExperiencedInField from './ExperiencedInField'
import ForAtLeastField from './ForAtLeastField'

//"Experienced" section for the Post Job page
const ExperienceSection = (props) => (

    <div className='section'>

        <SectionHeader text='Experience' />

        <div className='experience-section-fields-div'>
            <ExperiencedInField
                experienceIn={props.experienceIn}
                onExperienceInChange={props.onExperienceInChange} />
            <ForAtLeastField
                forAtLeast={props.forAtLeast}
                onForAtLeastChange={props.onForAtLeastChange} />
        </div>

    </div >
)

export default ExperienceSection