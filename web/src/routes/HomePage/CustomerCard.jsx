import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import './CustomerCard.css'

//Card to represent a customer
const CustomerCard = (props) => (
    <Card className='customer-card-div'
        image={props.image} //Display Picture
        header={props.name} //Name
        meta={props.jobTitle} //Job Title
        description={props.description} //Bio
        extra={props.extra + " Stars"}
    />
)

export default CustomerCard