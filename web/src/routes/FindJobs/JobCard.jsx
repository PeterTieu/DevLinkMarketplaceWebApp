import React, { useState } from 'react';
import { Card, Icon } from 'semantic-ui-react'
import './JobCard.css'
import JobCardExtension from './JobCardExtension';

const JobCard = (props) => {
    const [isVisible, setIsVisible] = useState(true); // Introduce local state

    const [isExpanded, setIsExpanded] = useState(false);

    // If the card is not visible, return null to prevent rendering
    if (!isVisible) return null;

    //Handle changes to the Title/Position field
    const handleDeleteClick = (e) => {
        setIsVisible(false)
    }

    //Handle changes to the Title/Position field
    const handleCardClick = (e) => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className='job-card-container'
            onClick={handleCardClick}
        >
            <Card className='job-card-div'
                image={props.imageUrl} //Display Picture
                header={props.titlePosition} //Title/Position
                meta={props.jobDescription} //Job Description
                description={props.skills} //Skills
            />

            {/* Display more information (i.e., expand the JobCard)
            if and only if the isExpanded variable is "true"*/}
            {isExpanded == true &&
                <JobCardExtension
                    selectedJobType={props.selectedJobType}
                    projectLength={props.projectLength}
                    paymentMin={props.paymentMin}
                    paymentMax={props.paymentMax}
                    workingHours={props.workingHours}
                    experienceIn={props.experienceIn}
                    forAtLeast={props.forAtLeast}
                />}

            <button className='delete-button' onClick={handleDeleteClick}>Delete Job</button> {/* Add onClick handler */}
        </div>
    )
}

export default JobCard