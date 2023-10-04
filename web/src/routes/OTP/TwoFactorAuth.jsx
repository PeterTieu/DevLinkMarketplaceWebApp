import React, { useState } from "react"
import { getAuth, getMultiFactorResolver, RecaptchaVerifier } from "firebase/auth";
import { auth } from '../../utils/firebase'



const TwoFactorAuth = (props) => {

    const recaptchaVerifier = new RecaptchaVerifier("sign-in-button", {
        "size": "invisible",
        "callback": function (response) {
            // reCAPTCHA solved, you can proceed with
            // phoneAuthProvider.verifyPhoneNumber(...).
            onSolvedRecaptcha();
        }
    }, auth);


    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            // User successfully signed in and is not enrolled with a second factor.
        })
        .catch(function (error) {
            if (error.code == 'auth/multi-factor-auth-required') {
                // The user is a multi-factor user. Second factor challenge is required.
                resolver = getMultiFactorResolver(auth, error);
                // ...
            } else if (error.code == 'auth/wrong-password') {
                // Handle other errors such as wrong password.
            }
        });


    return (
        <div>

        </div>
    )



}
export default TwoFactorAuth