import React, { useState } from 'react'
import './SignUpForm.css'
import Button from '../../general_components/Button'

// Sign Up Form
function SignUpForm(props) {

    const [email, setEmail] = useState('');

    //Handle changes when the 
    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    //Post data from the frontend server to the backend server when the "Subscribe" button is clicked
    const handleClick = async () => {

        await fetch('http://localhost:9010/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => {
                console.log("Error:" + err)
            })
    }

    return (
        <div className='signup-div'>
            <p>SIGN UP FOR OUR DAILY INSIDER</p>

            <input
                name='email'
                type='text'
                placeholder='Enter your email'
                onChange={handleChange}
            // value={email}
            />

            <Button
                type='submit'
                text='Subscribe'
                onClick={handleClick}
            />
        </div>
    )

}

export default SignUpForm