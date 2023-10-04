import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import './DeveloperCard.css'

// Card to display a developer
const DeveloperCard = (props) => (
    <Card className='developer-card-div'
        image={props.image} //Display Picture
        header={props.name} //Name
        meta={props.jobTitle} //Job Title
        description={props.description} //Bio
        extra={props.extra + " Stars"}
    />
)

export default DeveloperCard