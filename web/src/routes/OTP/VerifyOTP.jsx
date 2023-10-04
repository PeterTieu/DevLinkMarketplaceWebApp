import React, { useState } from "react"
// import {authentication} from './firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import './VerifyOTP.css'
import { auth } from '../../utils/firebase'


const VertifyOTP = (props) => {

    const countryCode = '+27';
    const [phoneNumber, setPhoneNumber] = useState(countryCode);
    const [expandForm, setExpandForm] = useState(false);
    const [OTP, setOTP] = useState('');

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                //reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, auth);
    }

    const requestOTP = (e) => {
        e.preventDefault();

        if (phoneNumber.length >= 12) {
            setExpandForm(true);
            generateRecaptcha();
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then(confirmationResult => {
                    window.confirmationResult = confirmationResult;
                }).catch((error) => {
                    console.log(error);
                })

        }
    }

    const verifyOTP = (e) => {
        let otp = e.target.value;
        setOTP(otp);

        if (otp.length === 6) {
            console.log(otp);

            // let confirmationResult = window.confirmationResult;
            // confirmationResult.confirm(otp).then((result) => {
            //     const user = result.user;
            //     console.log(user);
            // }).catch((error) => {
            //     //User couldn't sign in (bad verification code)
            // });
        }
    }

    return (
        <div className="formContainer">
            <form onSubmit={requestOTP}>
                <h1>Sign in with phone number</h1>
                <div className="mb-3">
                    <label htmlFor="phoneNumberInput" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneNumberInput" aria-aria-describedby="emailHelp" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <div id="phoneNumberHelp" className="form-text">Please enter your phone number</div>
                </div>

                {expandForm == true ?

                    <>
                        <div className="mb-3">
                            <label htmlFor="otpInput" className="form-label">OTP</label>
                            <input type="number" className="form-control" id="otpInput" value={OTP} onChange={verifyOTP} />
                            <div id="otpHelp" className="form-text">Please enter the time pine sent to your phone number</div>
                        </div>
                    </>
                    :
                    null
                }
                {
                    expandForm === false ?
                        <button type="submit" className="btn btn-primary">Request OTP</button>
                        :
                        null
                }
                <div id="recaptcha-container"></div>
            </form>
        </div>
    );
}

export default VertifyOTP