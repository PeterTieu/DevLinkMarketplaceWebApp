// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import Input from '../../general_components/Input'
// import '../../App.css'
// import './SignUp.css'
// import { Button, Icon } from 'semantic-ui-react'
// import { createAuthUserWithEmailandPassword, createUserDocFromAuth } from "../../utils/firebase"

// const SignUp = (props) => {

//     const [contact, setContact] = useState({
//         //Use destructuring to set the properties of the "contact" object
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     })

//     //Print all the information of contact to the console
//     const { firstName, lastName, email, password, confirmPassword } = contact;
//     console.log(contact);

//     //Define what happens when the "submit" button is clicked
//     const handleSubmit = async (event) => {
//         event.preventDefault(); //Prevent the page from reloading

//         //If the password and confirmPassword do not match
//         if (password !== confirmPassword) {
//             alert('Passwords do not match!')
//             return;
//         }

//         //Create a new user into Firebase, given the email and password
//         try {
//             const { user } = await createAuthUserWithEmailandPassword(email, password)

//             const displayName = firstName + " " + lastName;

//             await createUserDocFromAuth(user, { displayName, firstName, lastName, password });

//             //If the sign-up is successful, then re-direct the user to the Home Page
//             if (user) {
//                 window.location.href = '/login';
//             }
//         }
//         catch (error) {
//             console.log('error in creating user', error.message)
//         }
//     }

//     //Define what happens when a change is made
//     const handleChange = (event) => {
//         const { name, value } = event.target

//         setContact((preValue) => {
//             return {
//                 ...preValue, //Set all values to be as is
//                 [name]: value
//             }
//         })
//     }

//     return (
//         <div className="signup-style">

//             <br></br>

//             <Input
//                 label="First Name*"
//                 name="firstName"
//                 type='text'
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 value={contact.firstName}
//             />

//             <br></br>

//             <Input
//                 label="Last Name*"
//                 name="lastName"
//                 type='text'
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 value={contact.lastName}
//             />

//             <br></br>

//             <Input
//                 label="Email*"
//                 name="email"
//                 type='email'
//                 placeholder="Email"
//                 onChange={handleChange}
//                 value={contact.email}
//             />

//             <br></br>

//             <Input
//                 label="Password*"
//                 name='password'
//                 type="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 value={contact.password}
//             />

//             <br></br>

//             <Input
//                 label="Confirm Password*"
//                 name='confirmPassword'
//                 type="password"
//                 placeholder="Confirm Password"
//                 onChange={handleChange}
//                 value={contact.confirmPasswordpassword}
//             />

//             <br></br>

//             <Button positive onClick={handleSubmit}>
//                 Sign Up
//             </Button>

//             <br></br>

//             <Link className="link-div" to='/login'>Login</Link>

//         </div>
//     )
// }

// export default SignUp














// import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import Input from '../../general_components/Input'
// import '../../App.css'
// import './SignUp.css'
// import { Button, Icon } from 'semantic-ui-react'
// import { auth, createAuthUserWithEmailandPassword, createUserDocFromAuth } from "../../utils/firebase"
// import {
//     multiFactor, PhoneAuthProvider, PhoneMultiFactorGenerator,
//     RecaptchaVerifier
// } from "firebase/auth";

// const SignUp = (props) => {

//     const [contact, setContact] = useState({
//         //Use destructuring to set the properties of the "contact" object
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     })

//     //Print all the information of contact to the console
//     const { firstName, lastName, email, password, confirmPassword } = contact;
//     console.log(contact);
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             try {
//                 const verifier = new RecaptchaVerifier('sign-up-button', {
//                     'size': 'invisible',
//                 }, auth);
//                 setRecaptchaVerifier(verifier);
//             } catch (error) {
//                 console.error('Error initializing reCAPTCHA:', error);
//             }
//         }, 1000);  // 1 second delay
//     }, []);


//     //Define what happens when the "submit" button is clicked
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         console.log("checkpoint 1");

//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         try {
//             console.log("checkpoint 2");
//             const { user } = await createAuthUserWithEmailandPassword(email, password);
//             console.log("checkpoint 3");
//             await handlePhoneVerification(user);
//             console.log("checkpoint 7");
//             const displayName = firstName + " " + lastName;
//             console.log("checkpoint 8");

//             await createUserDocFromAuth(user, { displayName, firstName, lastName, password });

//             // If user creation was successful, send verification SMS
//             const phoneProvider = new PhoneAuthProvider();
//             console.log(phoneProvider);

//             if (!phoneProvider || !recaptchaVerifier) {
//                 console.error("Phone provider or recaptchaVerifier is not initialized");
//                 return;
//             }

//             const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier);
//             console.log(recaptchaVerifier);
//             const smsCode = prompt("Enter the verification code you received:");
//             const phoneCredential = PhoneAuthProvider.credential(verificationId, smsCode);

//             await user.linkWithCredential(phoneCredential);  // Link phone number to user's account


//             if (user) {
//                 window.location.href = '/login';
//             }
//         } catch (error) {
//             console.log(recaptchaVerifier);

//             console.log('Error in user creation or MFA setup:', error.message);
//         }
//     };

//     //Define what happens when a change is made
//     const handleChange = (event) => {
//         const { name, value } = event.target

//         setContact((preValue) => {
//             return {
//                 ...preValue, //Set all values to be as is
//                 [name]: value
//             }
//         })
//     }

//     const handlePhoneVerification = async (user) => {
//         const phoneProvider = new PhoneAuthProvider(auth);
//         console.log("Checkpoint 5");
//         console.log(phoneProvider);
//         const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier);
//         console.log("Checkpoint 6")
//         console.log(verificationId);
//         const smsCode = prompt("Enter the verification code you received:");
//         const phoneCredential = PhoneAuthProvider.credential(verificationId, smsCode);
//         await user.linkWithCredential(phoneCredential);
//     }

//     // useEffect(() => {
//     //     try {
//     //         const verifier = new RecaptchaVerifier('sign-up-button', {
//     //             'size': 'invisible',
//     //         }, auth);
//     //         setRecaptchaVerifier(verifier);
//     //     } catch (error) {
//     //         console.error('Error initializing reCAPTCHA:', error);
//     //     }
//     // }, []);




//     return (
//         <div className="signup-style">

//             <div id="sign-up-button"></div>

//             <br></br>

//             <Input
//                 label="First Name*"
//                 name="firstName"
//                 type='text'
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 value={contact.firstName}
//             />

//             <br></br>

//             <Input
//                 label="Last Name*"
//                 name="lastName"
//                 type='text'
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 value={contact.lastName}
//             />

//             <br></br>

//             <Input
//                 label="Email*"
//                 name="email"
//                 type='email'
//                 placeholder="Email"
//                 onChange={handleChange}
//                 value={contact.email}
//             />

//             <br></br>

//             <Input
//                 label="Phone Number (For MFA)"
//                 name="phoneNumber"
//                 type="tel"
//                 placeholder="Phone Number"
//                 onChange={e => setPhoneNumber(e.target.value)}
//                 value={phoneNumber}
//             />

//             <br></br>

//             <Input
//                 label="Password*"
//                 name='password'
//                 type="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 value={contact.password}
//             />

//             <br></br>

//             <Input
//                 label="Confirm Password*"
//                 name='confirmPassword'
//                 type="password"
//                 placeholder="Confirm Password"
//                 onChange={handleChange}
//                 value={contact.confirmPasswordpassword}
//             />

//             <br></br>

//             <Button positive onClick={handleSubmit}>
//                 Sign Up
//             </Button>

//             <br></br>

//             <Link className="link-div" to='/login'>Login</Link>

//         </div>
//     )
// }

// export default SignUp














// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Input from '../../general_components/Input';
// import { Button } from 'semantic-ui-react';
// import { auth, createAuthUserWithEmailandPassword, createUserDocFromAuth } from "../../utils/firebase";
// import {
//     multiFactor,
//     PhoneAuthProvider,
//     PhoneMultiFactorGenerator,
//     RecaptchaVerifier,
//     sendEmailVerification
// } from "firebase/auth";
// import '../../App.css'
// import './SignUp.css'

// const SignUp = (props) => {
//     const [contact, setContact] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

//     useEffect(() => {
//         try {
//             const verifier = new RecaptchaVerifier('sign-up-button', {
//                 'size': 'invisible',
//             }, auth);
//             setRecaptchaVerifier(verifier);
//         } catch (error) {
//             console.error('Error initializing reCAPTCHA:', error);
//         }
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const { email, password, firstName, lastName, confirmPassword } = contact;

//         if (password !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         try {
//             const { user } = await createAuthUserWithEmailandPassword(email, password);
//             await sendEmailVerification(user);
//             const displayName = `${firstName} ${lastName}`;
//             await createUserDocFromAuth(user, { displayName, firstName, lastName, password });

//             // Multi-factor authentication setup
//             await setupMultiFactorAuthentication(user);

//             if (user) {
//                 window.location.href = '/login';
//             }
//         } catch (error) {
//             console.log('Error in user creation or MFA setup:', error.message);
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setContact((preValue) => ({
//             ...preValue,
//             [name]: value
//         }));
//     }

//     const setupMultiFactorAuthentication = async (user) => {
//         try {
//             const { firstName, lastName } = contact;  // Ensure contact is defined in this scope

//             const multiFactorSession = await multiFactor(user).getSession();
//             const phoneInfoOptions = {
//                 phoneNumber: phoneNumber,
//                 session: multiFactorSession
//             };
//             const phoneAuthProvider = new PhoneAuthProvider(auth);
//             const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);
//             const verificationCode = prompt("Enter the verification code you received:");
//             const cred = PhoneAuthProvider.credential(verificationId, verificationCode);
//             const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

//             const mfaDisplayName = `${firstName} ${lastName}`;
//             await multiFactor(user).enroll(multiFactorAssertion, mfaDisplayName);
//         } catch (error) {
//             console.error("MFA setup failed:", error);
//         }
//     }


//     return (
//         <div className="signup-style">

//             <div id="sign-up-button"></div>

//             <br></br>

//             <Input
//                 label="First Name*"
//                 name="firstName"
//                 type='text'
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 value={contact.firstName}
//             />

//             <br></br>

//             <Input
//                 label="Last Name*"
//                 name="lastName"
//                 type='text'
//                 placeholder="Last Name"
//                 onChange={handleChange}
//                 value={contact.lastName}
//             />

//             <br></br>

//             <Input
//                 label="Email*"
//                 name="email"
//                 type='email'
//                 placeholder="Email"
//                 onChange={handleChange}
//                 value={contact.email}
//             />

//             <br></br>

//             <Input
//                 label="Phone Number (For MFA)"
//                 name="phoneNumber"
//                 type="tel"
//                 placeholder="Phone Number"
//                 onChange={e => setPhoneNumber(e.target.value)}
//                 value={phoneNumber}
//             />

//             <br></br>

//             <Input
//                 label="Password*"
//                 name='password'
//                 type="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 value={contact.password}
//             />

//             <br></br>

//             <Input
//                 label="Confirm Password*"
//                 name='confirmPassword'
//                 type="password"
//                 placeholder="Confirm Password"
//                 onChange={handleChange}
//                 value={contact.confirmPasswordpassword}
//             />

//             <br></br>

//             <Button positive onClick={handleSubmit}>
//                 Sign Up
//             </Button>

//             <br></br>

//             <Link className="link-div" to='/login'>Login</Link>

//         </div>
//     )
// }

// export default SignUp;












import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from '../../general_components/Input';
import { Button } from 'semantic-ui-react';
import { auth, createAuthUserWithEmailandPassword, createUserDocFromAuth } from "../../utils/firebase";
import {
    multiFactor,
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    RecaptchaVerifier,
    sendEmailVerification
} from "firebase/auth";
import '../../App.css'
import './SignUp.css'

const SignUp = (props) => {
    // Initialise state for user contact info and phone number
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [phoneNumber, setPhoneNumber] = useState("");
    const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

    // Set up reCAPTCHA on component mount
    useEffect(() => {
        try {
            const verifier = new RecaptchaVerifier('sign-up-button', {
                'size': 'invisible',
            }, auth);
            setRecaptchaVerifier(verifier);
        } catch (error) {
            // Log error if reCAPTCHA initialisation fails
            console.error('Error initializing reCAPTCHA:', error);
        }
    }, []);

    // Function to handle submission of the sign-up form
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, firstName, lastName, confirmPassword } = contact;

        // Check password confirmation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            // Create user, send email verification, create user doc, and set up MFA
            const { user } = await createAuthUserWithEmailandPassword(email, password);
            await sendEmailVerification(user);
            const displayName = `${firstName} ${lastName}`;
            await createUserDocFromAuth(user, { displayName, firstName, lastName, password });
            await setupMultiFactorAuthentication(user);

            // Redirect to login if user object exists
            if (user) {
                window.location.href = '/login';
            }
        } catch (error) {
            // Log error if user creation or MFA setup fails
            console.log('Error in user creation or MFA setup:', error.message);
        }
    };

    // Function to handle form field changes and update state
    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((preValue) => ({
            ...preValue,
            [name]: value
        }));
    }

    // Function to set up multi-factor authentication
    const setupMultiFactorAuthentication = async (user) => {
        try {
            const { firstName, lastName } = contact;

            // Set up phone number verification for MFA
            const multiFactorSession = await multiFactor(user).getSession();
            const phoneInfoOptions = {
                phoneNumber: phoneNumber,
                session: multiFactorSession
            };
            const phoneAuthProvider = new PhoneAuthProvider(auth);
            const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);
            const verificationCode = prompt("Enter the verification code you received:");
            const cred = PhoneAuthProvider.credential(verificationId, verificationCode);
            const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

            // Enroll user in MFA
            const mfaDisplayName = `${firstName} ${lastName}`;
            await multiFactor(user).enroll(multiFactorAssertion, mfaDisplayName);
        } catch (error) {
            // Log error if MFA setup fails
            console.error("MFA setup failed:", error);
        }
    }


    return (
        <div className="signup-style">

            <div id="sign-up-button"></div>

            <br></br>

            <Input
                label="First Name*"
                name="firstName"
                type='text'
                placeholder="First Name"
                onChange={handleChange}
                value={contact.firstName}
            />

            <br></br>

            <Input
                label="Last Name*"
                name="lastName"
                type='text'
                placeholder="Last Name"
                onChange={handleChange}
                value={contact.lastName}
            />

            <br></br>

            <Input
                label="Email*"
                name="email"
                type='email'
                placeholder="Email"
                onChange={handleChange}
                value={contact.email}
            />

            <br></br>

            <Input
                label="Phone Number (For MFA)"
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                onChange={e => setPhoneNumber(e.target.value)}
                value={phoneNumber}
            />

            <br></br>

            <Input
                label="Password*"
                name='password'
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={contact.password}
            />

            <br></br>

            <Input
                label="Confirm Password*"
                name='confirmPassword'
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={contact.confirmPasswordpassword}
            />

            <br></br>

            <Button positive onClick={handleSubmit}>
                Sign Up
            </Button>

            <br></br>

            <Link className="link-div" to='/login'>Login</Link>

        </div>
    )
}

export default SignUp;
