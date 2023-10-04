import React, { useState, useEffect } from 'react';
import JobCard from "./JobCard"
import './JobCard.css'
import { fetchJobs } from './fetchJobs';

//Component to display a list of cards representing jobs
function JobCardComponent(job) {

    return (
        <JobCard
            imageUrl={job.imageUrl}
            titlePosition={job.titlePosition}
            jobDescription={job.jobDescription}
            skills={job.skills}
            selectedJobType={job.selectedJobType}
            projectLength={job.projectLength}
            paymentMin={job.paymentMin}
            paymentMax={job.paymentMax}
            workingHours={job.workingHours}
            experienceIn={job.experienceIn}
            forAtLeast={job.forAtLeast}
        />
    )
}

function JobCardList(props) {
    const [jobList, setJobList] = useState([]); // Initial state as empty array

    useEffect(() => {
        // Fetch the jobs and update the state
        fetchJobs().then(jobs => {
            setJobList(jobs);
        });
    }, []); // Empty dependency array ensures this runs once when component mounts

    const filteredJob = jobList.filter(job => {
        return job.titlePosition.toLowerCase().includes(props.titlePositionSearchTerm.toLowerCase())
            && job.skills.toLowerCase().includes(props.skillsSearchTerm.toLowerCase())
    });

    //Render the component
    return (
        <div className="row">
            {filteredJob.map(JobCardComponent)}
        </div>
    );
}

export default JobCardList