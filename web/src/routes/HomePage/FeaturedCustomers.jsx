import React from 'react';
import SubHeading from '../../general_components/SubHeading';
import './FeaturedCustomers.css';
import CustomerCard from './CustomerCard';
import developerList from '../../utils/customerList';
import SeeMoreButton from './SeeMoreButton';

function customerCardComponent(customer, i) {
    return (
        <CustomerCard
            key={customer.key}
            image={customer.image}
            name={customer.name}
            jobTitle={customer.jobTitle}
            description={customer.description}
            extra={customer.extra}
        />
    )
}

function FeaturedCustomers() {

    return (
        <div className='featured-customers-div'>
            <SubHeading text="Featured Customers" />

            <div className='featured-customers-container'>
                {developerList.map(customerCardComponent)}
            </div>

            <SeeMoreButton
                type="Submit"
                text="See all customers"
            />
        </div>
    )
}

export default FeaturedCustomers