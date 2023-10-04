import React from 'react'
import './Section.css'

import SectionHeader from './SectionHeader'
import SelectJobTypeField from './SelectJobTypeField'

// "New Job" section for the Post Job page
const NewJobSection = (props) => (

    <div className=' section new-job-seciton-div'>
        <SectionHeader text='New Job' />
        <SelectJobTypeField
            selectedJobType={props.selectedJobType}
            setSelectedJobType={props.setSelectedJobType} />
    </div >
)

export default NewJobSection