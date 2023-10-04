// import React, { useState, useContext, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { UserContext } from "../../context/user.context"
// import Input from "../../general_components/Input"
// import '../../App.css'
// import './Login.css'
// import { Button, Icon } from 'semantic-ui-react'
// import { signInWithGooglePopup, createUserDocFromAuth, signInAutUserWithEmailAndPassword } from "../../utils/firebase"


// const Login = (props) => {

//     const { setCurrentUser } = useContext(UserContext) //Obtain the setCurrentUser function from the UserContext

//     const navigate = useNavigate();

//     //Login with Google
//     const logGoogleUser = async () => {
//         // //Open a new window to login with Google,
//         // //then wait for the user to click on a Google account,
//         // //which will then be assigned to the collection called "user"
//         // //of the Firebase authentication
//         // const { user } = await signInWithGooglePopup();

//         // //Create a document under the "user" collection, called "userDocRef"
//         // //NOTE: In the Firestore DB, there will be a document called under the "user" collection
//         // const userDocRef = await createUserDocFromAuth(user)

//         // //If the login is successful, then re-direct the user to the Home Page
//         // if (userDocRef) {
//         //     window.location.href = '/user';
//         // }

//         //Create a new user into Firebase, given the email and password
//         try {
//             //Open a new window to login with Google,
//             //then wait for the user to click on a Google account,
//             //which will then be assigned to the collection called "user"
//             //of the Firebase authentication
//             const { user } = await signInWithGooglePopup();

//             //Create a document under the "user" collection, called "userDocRef"
//             //NOTE: In the Firestore DB, there will be a document called under the "user" collection
//             const userDocRef = await createUserDocFromAuth(user)

//             setCurrentUser(user); //Set the currentUser in the UserContext

//             // console.log(response); //Print signin status onto the console (via Inspect -> Console)
//             navigate('/user')
//         }
//         catch (error) {
//             console.log('error in login', error.message)
//         }


//     }


//     const [contact, setContact] = useState({
//         //Use destructuring to set the properties of the "contact" object
//         email: '',
//         password: ''
//     })

//     const { email, password } = contact;

//     //Define what happens when the user inputs change
//     const handleChange = (event) => {
//         const { name, value } = event.target //Get the value of the "name" or "value" props

//         setContact((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value
//             }
//         })
//     }

//     //Define what happens when the "submit" button is clicked
//     const handleSubmit = async (event) => {
//         event.preventDefault(); //Prevent the page from reloading

//         //Create a new user into Firebase, given the email and password
//         try {
//             const { user } = await signInAutUserWithEmailAndPassword(email, password);
//             console.log(user); //Print signin status onto the console (via Inspect -> Console)\

//             setCurrentUser(user); //Set the currentUser in the UserContext

//             navigate('/user')
//         }
//         catch (error) {
//             console.log('error in login', error.message)
//             alert('Email or Password are incorrect')
//         }

//     }

//     const handleForgotPasswordClick = () => {
//         navigate("/forgotPassword");
//     }


//     return (
//         <div className="login-style">

//             <br></br>

//             <Input
//                 label="Email"
//                 name="email"
//                 type='text'
//                 placeholder="email"
//                 onChange={handleChange}
//                 value={contact.email}
//             />

//             <br></br>

//             <Input
//                 label="Password"
//                 name='password'
//                 type="password"
//                 placeholder="password"
//                 onChange={handleChange}
//                 value={contact.password}
//             />

//             <br></br>

//             <Button positive onClick={handleSubmit}>
//                 Sign In
//             </Button>

//             <br></br>

//             <Button onClick={logGoogleUser} color='blue'>
//                 <Icon name='google' /> Sign In With Google
//             </Button>

//             <br></br>

//             <Link className="link-div" to='/signup'>Create Account</Link>

//             <p onClick={handleForgotPasswordClick}>Forgot Password?</p>
//         </div>
//     )
// }

// export default Login











// import React, { useState, useContext, useEffect } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { UserContext } from "../../context/user.context"
// import Input from "../../general_components/Input"
// import '../../App.css'
// import './Login.css'
// import { Button, Icon } from 'semantic-ui-react'
// import {
//     auth, signInWithGooglePopup,
//     createUserDocFromAuth,
//     signInAutUserWithEmailAndPassword
// } from "../../utils/firebase"
// import {
//     RecaptchaVerifier,
//     getAuth,
//     signInWithEmailAndPassword,
//     getMultiFactorResolver,
//     PhoneAuthProvider,
//     PhoneMultiFactorGenerator
// } from "firebase/auth";

// const Login = (props) => {

//     const { setCurrentUser } = useContext(UserContext) //Obtain the setCurrentUser function from the UserContext
//     const [verificationId, setVerificationId] = useState("");
//     const [smsCode, setSmsCode] = useState("");
//     const [isMfaRequired, setMfaRequired] = useState(false);
//     const [mfaResolver, setMfaResolver] = useState(null);
//     const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);


//     const navigate = useNavigate();

//     useEffect(() => {
//         if (auth && auth.currentUser === null) { // ensuring auth is initialized and no user is logged in
//             setTimeout(() => {
//                 const verifier = new RecaptchaVerifier("sign-in-button", {
//                     "size": "invisible",
//                     "callback": function (response) {
//                         // No need to perform any action here for now
//                     }
//                 }, auth);
//                 setRecaptchaVerifier(verifier);
//             }, 1000);
//         }
//     }, [auth]);


//     //Login with Google
//     const logGoogleUser = async () => {
//         // //Open a new window to login with Google,
//         // //then wait for the user to click on a Google account,
//         // //which will then be assigned to the collection called "user"
//         // //of the Firebase authentication
//         // const { user } = await signInWithGooglePopup();

//         // //Create a document under the "user" collection, called "userDocRef"
//         // //NOTE: In the Firestore DB, there will be a document called under the "user" collection
//         // const userDocRef = await createUserDocFromAuth(user)

//         // //If the login is successful, then re-direct the user to the Home Page
//         // if (userDocRef) {
//         //     window.location.href = '/user';
//         // }

//         //Create a new user into Firebase, given the email and password
//         try {
//             //Open a new window to login with Google,
//             //then wait for the user to click on a Google account,
//             //which will then be assigned to the collection called "user"
//             //of the Firebase authentication
//             const { user } = await signInWithGooglePopup();

//             //Create a document under the "user" collection, called "userDocRef"
//             //NOTE: In the Firestore DB, there will be a document called under the "user" collection
//             const userDocRef = await createUserDocFromAuth(user)

//             setCurrentUser(user); //Set the currentUser in the UserContext

//             // console.log(response); //Print signin status onto the console (via Inspect -> Console)
//             navigate('/user')
//         }
//         catch (error) {
//             console.log('error in login', error.message)
//         }


//     }


//     const [contact, setContact] = useState({
//         //Use destructuring to set the properties of the "contact" object
//         email: '',
//         password: ''
//     })

//     const { email, password } = contact;

//     //Define what happens when the user inputs change
//     const handleChange = (event) => {
//         const { name, value } = event.target //Get the value of the "name" or "value" props

//         setContact((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value
//             }
//         })
//     }

//     //Define what happens when the "submit" button is clicked
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const { user } = await signInAutUserWithEmailAndPassword(email, password);
//             setCurrentUser(user);
//             navigate('/user');
//         } catch (error) {
//             if (error.code === 'auth/multi-factor-auth-required') {
//                 const resolver = getMultiFactorResolver(auth, error);
//                 setMfaResolver(resolver);
//                 setMfaRequired(true);

//                 const phoneInfoOptions = {
//                     multiFactorHint: resolver.hints[0],
//                     session: resolver.session
//                 };

//                 const phoneAuthProvider = new PhoneAuthProvider(auth);
//                 phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier)
//                     .then(verificationId => {
//                         setVerificationId(verificationId);
//                     }).catch(error => {
//                         console.error('Error sending SMS', error);
//                         recaptchaVerifier.clear();
//                         alert('Error sending verification code. Please try again.');
//                     });
//             } else {
//                 console.error('Login error', error.message);
//                 alert('Email or Password are incorrect');
//             }
//         }
//     };

//     //Define what happens when the "submit" button is clicked
//     // const handleSubmit = async (event) => {
//     //     event.preventDefault();

//     //     try {
//     //         const { user } = await signInAutUserWithEmailAndPassword(email, password);
//     //         setCurrentUser(user);
//     //         navigate('/user');
//     //     } catch (error) {
//     //         if (error.code === 'auth/multi-factor-auth-required') {
//     //             await handleMFA(error);
//     //         } else {

//     //             console.error('Login error', error.message);
//     //             alert('Email or Password are incorrect');
//     //         }
//     //     }
//     // };


//     //Determine what happens when the user submits the SMS code
//     const handleCompleteSignIn = async () => {
//         try {
//             const cred = PhoneAuthProvider.credential(verificationId, smsCode);
//             const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
//             const userCredential = await mfaResolver.resolveSignIn(multiFactorAssertion);

//             setCurrentUser(userCredential.user);
//             navigate('/user');
//         } catch (error) {
//             console.error('Error completing sign in', error);
//             alert('Incorrect verification code. Please try again.');
//         }
//     };

//     const handleMFA = async (error) => {
//         const resolver = getMultiFactorResolver(auth, error);
//         setMfaResolver(resolver);
//         setMfaRequired(true);

//         // Attempting to send a verification code via SMS.
//         try {
//             const phoneInfoOptions = {
//                 multiFactorHint: resolver.hints[0],  // assuming the user has only one MFA method set up
//                 session: resolver.session
//             };

//             const phoneAuthProvider = new PhoneAuthProvider(auth);
//             const verificationId = await phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);

//             setVerificationId(verificationId);

//         } catch (smsError) {
//             console.error('Error sending SMS', smsError);
//             alert('Error sending verification code. Please try again later.');
//         }
//     }

//     const handleForgotPasswordClick = () => {
//         navigate("/forgotPassword");
//     }


//     return (
//         <div className="login-style">

//             <div id="sign-in-button" style={{ display: 'none' }}></div>

//             {!isMfaRequired ? (
//                 <>

//                     <br></br>
//                     <Input
//                         label="Email"
//                         name="email"
//                         type='text'
//                         placeholder="email"
//                         onChange={handleChange}
//                         value={contact.email}
//                     />

//                     <br></br>

//                     <Input
//                         label="Password"
//                         name='password'
//                         type="password"
//                         placeholder="password"
//                         onChange={handleChange}
//                         value={contact.password}
//                     />

//                     <br></br>

//                     {/* Your Existing Email and Password Inputs */}
//                     {/* ... */}
//                     <Button positive onClick={handleSubmit}>
//                         Sign In
//                     </Button>

//                     <br></br>

//                     <Button onClick={logGoogleUser} color='blue'>
//                         <Icon name='google' /> Sign In With Google
//                     </Button>

//                     <br></br>

//                     <Link className="link-div" to='/signup'>Create Account</Link>

//                     <p onClick={handleForgotPasswordClick}>Forgot Password?</p>
//                 </>
//             ) : (
//                 <>
//                     <Input
//                         label="Verification Code"
//                         name="smsCode"
//                         type="text"
//                         placeholder="Enter SMS Code"
//                         onChange={e => setSmsCode(e.target.value)}
//                         value={smsCode}
//                     />
//                     <Button positive onClick={handleCompleteSignIn}>
//                         Verify
//                     </Button>
//                 </>
//             )}
//         </div>
//     );

// }

// export default Login










import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import Input from "../../general_components/Input";
import { Button, Icon } from 'semantic-ui-react';
import {
    auth, signInWithGooglePopup,
    createUserDocFromAuth, signInAutUserWithEmailAndPassword
} from "../../utils/firebase";
import {
    RecaptchaVerifier, getAuth, signInWithEmailAndPassword,
    getMultiFactorResolver, PhoneAuthProvider, PhoneMultiFactorGenerator
} from "firebase/auth";
import '../../App.css'
import './Login.css'

const Login = () => {

    const navigate = useNavigate(); // Define navigation
    const { setCurrentUser } = useContext(UserContext); // Extract context methods

    // State management for user credentials and MFA flow
    const [contact, setContact] = useState({ email: '', password: '' });
    const [verificationId, setVerificationId] = useState("");
    const [smsCode, setSmsCode] = useState("");
    const [isMfaRequired, setMfaRequired] = useState(false);
    const [mfaResolver, setMfaResolver] = useState(null);
    const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);

    useEffect(() => {
        try {
            // Initialise reCAPTCHA on component mount
            const verifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
            }, auth);
            setRecaptchaVerifier(verifier);
        } catch (error) {
            console.error('Error initializing reCAPTCHA:', error);
        }
    }, []);

    // Define what happens when change is made into the email/username inputs
    const handleChange = (event) => {
        const { name, value } = event.target;

        // Handle form input changes
        setContact(prevValue => ({ ...prevValue, [name]: value }));
    };

    const { email, password } = contact;

    const handleSignIn = async (e) => {
        e.preventDefault();

        const { email, password } = contact;

        try {
            // Attempt email/password sign-in
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Check for email verification before allowing login
            if (!user.emailVerified) {
                alert('Please verify your email before logging in.');
                return;
            }

            setCurrentUser(userCredential.user);  // Update context with new user
            navigate('/user'); // Navigate to user page
        } catch (error) {
            if (error.code === 'auth/multi-factor-auth-required') {
                handleMfa(error);
                // console.error("Error during sign-in: ", error);
                // alert("Failed to sign in: " + error.message);
            } else {
                alert("Failed to sign in: " + error.message);
            }
        }
    };

    const handleMfa = async (error) => {
        // Handle multi-factor authentication
        const resolver = getMultiFactorResolver(auth, error);
        setMfaResolver(resolver);
        setMfaRequired(true);

        // Delay execution using setTimeout
        setTimeout(async () => {
            try {
                // Reinitialize reCAPTCHA within MFA flow
                const verifier = new RecaptchaVerifier("recaptcha-container", {
                    "size": "invisible",
                    "callback": function (response) {
                        // reCAPTCHA solved, proceed with phone verification
                        onSolvedRecaptcha();
                    },
                    "expired-callback": function () {
                        // Response expired. Ask user to solve reCAPTCHA again.
                        // Implement your logic here if any...
                    }
                }, auth);
                setRecaptchaVerifier(verifier);

                // You might need to trigger the reCAPTCHA at this point depending on your UI/UX flow.

            } catch (error) {
                console.error("Error initializing reCAPTCHA: ", error);
                // alert("Failed to initialize reCAPTCHA: " + error.message);
            }
        }, 1000); // 1000ms = 1 second
    };

    const onSolvedRecaptcha = async () => {
        try {
            // Execute phone verification upon solving reCAPTCHA
            const phoneAuthProvider = new PhoneAuthProvider(auth);
            const phoneInfoOptions = {
                multiFactorHint: mfaResolver.hints[0], // Assumes user has only one second factor
                session: mfaResolver.session
            };

            const vid = await phoneAuthProvider.verifyPhoneNumber(phoneInfoOptions, recaptchaVerifier);
            setVerificationId(vid);

        } catch (error) {
            console.error("Error verifying phone number: ", error);
        }
    };

    // Implement MFA upon successful sign in
    const handleCompleteMfaSignIn = async () => {
        const cred = PhoneAuthProvider.credential(verificationId, smsCode);
        const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);
        try {
            // Complete the MFA sign-in flow
            const userCredential = await mfaResolver.resolveSignIn(multiFactorAssertion);
            setCurrentUser(userCredential.user);
            navigate('/user');
        } catch (error) {
            console.error("Error during MFA sign-in completion: ", error);
        }
    };

    // Log in as Google user
    const logGoogleUser = async () => {
        // Similar to your previous implementation
        try {
            // Sign in with Google and navigate upon success
            const { user } = await signInWithGooglePopup();
            const userDocRef = await createUserDocFromAuth(user);
            setCurrentUser(user);
            if (userDocRef) navigate('/user');
        } catch (error) {
            console.error('Google Sign In Error', error.message);
        }
    };

    const handleForgotPasswordClick = () => {
        navigate("/forgotPassword"); // Navigate to forgot password page
    }

    return (
        <div className="login-style">

            <div id="recaptcha-container"></div>

            {isMfaRequired ? (
                <>
                    <br></br>

                    <Input
                        label="Verification Code"
                        name="smsCode"
                        type="text"
                        placeholder="Enter SMS Code"
                        onChange={e => setSmsCode(e.target.value)}
                        value={smsCode}
                    />

                    <br></br>
                    <Button positive onClick={handleCompleteMfaSignIn}>
                        Verify
                    </Button>
                </>
            ) : (
                <>
                    <br></br>
                    <Input label="Email" name="email" type='text' placeholder="Email" onChange={handleChange} value={contact.email} />

                    <br></br>

                    <Input label="Password" name='password' type="password" placeholder="Password" onChange={handleChange} value={contact.password} />

                    <br></br>

                    <Button positive onClick={handleSignIn}>
                        Sign In
                    </Button>

                    <br></br>

                    <Button onClick={logGoogleUser} color='blue'>
                        <Icon name='google' /> Sign In With Google
                    </Button>

                    <br></br>

                    <p className="forgot-password"
                        onClick={handleForgotPasswordClick}>
                        Forgot Password?
                    </p>

                    <Link className="link-div" to='/signup'>Create Account</Link>

                    <br></br>
                </>
            )}
        </div>
    );
};

export default Login;