import React, { useState } from 'react'
import './FindJobs.css'
import SubHeading from '../../general_components/SubHeading'
import JobCardList from './JobCardList'

function FindJobs() {
    //Use destructuring to set the value of "searchTerm" to ''
    // and the function "setSearchTerm" to set/update the value of "searchTerm"
    const [titlePositionSearchTerm, setTitlePositionSearchTerm] = useState('')
    const [skillsSearchTerm, setSkillsSearchTerm] = useState('')


    //==================== Set listener for Search Title/Position input box ====================
    //Function to be called by listener
    const onSearchTitlePositionChange = (e) => {
        setTitlePositionSearchTerm(e.target.value) //Assign the value of "searchTerm" to the value
        //                              typed into the input box
    }


    //==================== Set listener for Search Skills input box ====================
    //Function to be called by listener
    const onSearchSkillsChange = (e) => {
        setSkillsSearchTerm(e.target.value) //Assign the value of "searchTerm" to the value
        //                              typed into the input box
    }


    //==================== Render the component ====================
    return (
        <div>
            <SubHeading
                text="Job List"
            />

            <br></br>

            <div className='search-input'>
                <input className='search-box'
                    type='text'
                    placeholder='Search Jobs'
                    onChange={onSearchTitlePositionChange}
                    value={titlePositionSearchTerm}
                />
            </div>

            <br></br>

            <div className='search-input'>
                <input className='search-box'
                    type='text'
                    placeholder='Search Skills'
                    onChange={onSearchSkillsChange}
                    value={skillsSearchTerm}
                />
            </div>

            <br></br>

            <JobCardList
                titlePositionSearchTerm={titlePositionSearchTerm}
                skillsSearchTerm={skillsSearchTerm}
            />

        </div>
    );
}

export default FindJobs