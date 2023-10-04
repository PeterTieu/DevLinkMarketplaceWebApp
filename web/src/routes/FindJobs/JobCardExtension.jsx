import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import JobCardExtensionField from './JobCardExtensionField';

const JobCardExtension = (props) => {

    return (
        <div>
            <Card className='job-card-div'

            >
                <JobCardExtensionField
                    fieldName='Job Type'
                    fieldValue={props.selectedJobType}
                />

                <JobCardExtensionField
                    fieldName='Project Length'
                    fieldValue={props.projectLength}
                />

                <JobCardExtensionField
                    fieldName='Min Payment'
                    fieldValue={props.paymentMin}
                />

                <JobCardExtensionField
                    fieldName='Max Payment'
                    fieldValue={props.paymentMax}
                />

                <JobCardExtensionField
                    fieldName='Working Hours'
                    fieldValue={props.workingHours}
                />

                <JobCardExtensionField
                    fieldName='Experience In'
                    fieldValue={props.experienceIn}
                />

                <JobCardExtensionField
                    fieldName='For At Least'
                    fieldValue={props.forAtLeast}
                />

            </Card>
        </div>
    )
}

export default JobCardExtension