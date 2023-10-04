import React from 'react'
import './Section.css'
import './Field.css'
import SectionHeader from './SectionHeader'
import ProjectLengthField from './ProjectLengthField'
import PaymentField from './PaymentField'
import WorkingHoursField from './WorkingHoursField'

// "Project Conditions" section of the Post Job page
const ProjectConditionsSection = (props) => (

    <div className='section'>

        <SectionHeader text='Project Conditions' />

        <div>
            <ProjectLengthField
                projectLength={props.projectLength}
                onProjectLengthChange={props.onProjectLengthChange}
            />

            <PaymentField
                paymentMin={props.paymentMin}
                onPaymentMinChange={props.onPaymentMinChange}
                paymentMax={props.paymentMax}
                onPaymentMaxChange={props.onPaymentMaxChange}
            />

            <WorkingHoursField
                workingHours={props.workingHours}
                onWorkingHoursChange={props.onWorkingHoursChange}
            />
        </div>

    </div >
)

export default ProjectConditionsSection