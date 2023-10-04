import React from 'react';
import './JobCardExtensionField.css'

const JobCardExtensionField = (props) => {

    return (
        <div className='job-card-extension-field-div'>
            <h4>{props.fieldName}: </h4>
            &nbsp; &nbsp;
            <p> {props.fieldValue}</p>

        </div>
    )
}

export default JobCardExtensionField