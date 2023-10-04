import React from 'react';
import '../../App.css'
import { Outlet } from "react-router-dom";
import BannerImage from './BannerImage';
import FeaturedFreelancers from './FeaturedFreelancers';
import FeaturedCustomers from './FeaturedCustomers';
import SignUpForm from '../SignUp/SignUpForm';

// Component to render the Home Page
function HomePage() {

    return (
        <div>
            <BannerImage src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2019/12/12193533/11-Best-Web-Design-Companies-in-India.png" />
            <br></br>
            <hr width="80%"></hr>
            <br></br>
            <FeaturedFreelancers />
            <br></br>
            <hr width="80%"></hr>
            <br></br>
            <FeaturedCustomers />
            <br></br>
            <hr width="80%"></hr>
            <br></br>
            <SignUpForm />
            <br></br>
            <br></br>
            <hr width="80%"></hr>
            <br></br>

            <Outlet />

        </div>
    );
}

export default HomePage