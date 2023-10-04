// import React from 'react';
// import SubHeading from '../../general_components/SubHeading';
// import './FeaturedFreelancers.css';
// import DeveloperCard from '../../DeveloperCard';
// import developerList from '../../utils/developerList';
// import SeeMoreButton from './SeeMoreButton';

// function developerCardComponent(developer, i) {
//     return (
//         <DeveloperCard
//             key={developer.key}
//             image={developer.image}
//             name={developer.name}
//             jobTitle={developer.jobTitle}
//             description={developer.description}
//             extra={developer.extra}
//         />
//     )
// }

// function FeaturedFreelancers() {

//     return (
//         <div className='featured-freelancers-div'>
//             <SubHeading text="Featured Freelancers" />

//             <div className='featured-freelancers-container'>
//                 {developerList.map(developerCardComponent)}
//             </div>

//             <SeeMoreButton
//                 type="Submit"
//                 text="See More Developers"
//             />
//         </div>
//     )
// }

// export default FeaturedFreelancers

import React from 'react';
import SubHeading from '../../general_components/SubHeading';
import './FeaturedFreelancers.css';
import DeveloperCard from './DeveloperCard';
import developerList from '../../utils/developerList';
import SeeMoreButton from './SeeMoreButton';

// Function to create a DeveloperCard component for each developer
function developerCardComponent(developer, i) {
    return (
        <DeveloperCard
            key={developer.key}
            image={developer.image}
            name={developer.name}
            jobTitle={developer.jobTitle}
            description={developer.description}
            extra={developer.extra}
        />
    )
}

// Component to render the Featured Freelancers section
function FeaturedFreelancers() {
    return (
        <div className='featured-freelancers-div'>
            {/* Render subheading */}
            <SubHeading text="Featured Freelancers" />

            {/* Map through developer data and create a card for each one */}
            <div className='featured-freelancers-container'>
                {developerList.map(developerCardComponent)}
            </div>

            {/* See More Developers button */}
            <SeeMoreButton
                type="Submit"
                text="See More Developers"
            />
        </div>
    )
}

export default FeaturedFreelancers;
