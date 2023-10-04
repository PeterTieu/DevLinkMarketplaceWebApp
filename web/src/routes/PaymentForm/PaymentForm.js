// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
// import axios from "axios"
// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom"

// const CARD_OPTIONS = {
//     iconStyle: "solid",
//     style: {
//         base: {
//             iconColor: "#c4f0ff",
//             color: "#fff",
//             fontWeight: 500,
//             fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
//             fontSize: "16px",
//             fontSmoothing: "antialiased",
//             ":-webkit-autofill": { color: "#fce883" },
//             "::placeholder": { color: "#87bbfd" }
//         },
//         invalid: {
//             iconColor: "#ffc7ee",
//             color: "#ffc7ee"
//         }
//     }
// }

// export default function PaymentForm({ data }) {
//     const [success, setSuccess] = useState(false)
//     const stripe = useStripe()
//     const elements = useElements()

//     const navigate = useNavigate();


//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })


//         if (!error) {
//             try {
//                 const { id } = paymentMethod
//                 const response = await axios.post("http://localhost:4000/payment", {
//                     amount: 1000,
//                     id
//                 })

//                 if (response.data.success) {
//                     console.log("Successful payment")
//                     setSuccess(true)
//                 }

//             } catch (error) {
//                 console.log("Error", error)
//                 setSuccess(true) //Set success as "true" anyway for dummy payment
//             }
//         } else {
//             console.log(error.message)
//         }
//     }

//     console.log(data);

//     return (

//         <>
//             {!success ?
//                 <form onSubmit={handleSubmit}>
//                     <fieldset className="FormGroup">
//                         <div className="FormRow">
//                             <CardElement options={CARD_OPTIONS} />
//                         </div>
//                     </fieldset>
//                     <button>Pay</button>
//                 </form>
//                 :

//                 //Send the Post Job input data back to PostJob.jsx
//                 navigate('/user/postJob', { state: { postJobData: data, paymentSuccess: true } })
//             }
//         </>
//     )
// }


import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

// Styling options for the Stripe card element
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm({ data }) {
    // State to keep track of payment success status
    const [success, setSuccess] = useState(false)
    // Hooks provided by Stripe to interact with Stripe elements and API
    const stripe = useStripe()
    const elements = useElements()

    // Hook from React Router Dom to navigate through application pages
    const navigate = useNavigate();

    // Handler for the form submission
    const handleSubmit = async (e) => {
        // Prevent the default form submission
        e.preventDefault()

        // Attempt to create a payment method using Stripe and the Card Element
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        // If payment method is successfully created
        if (!error) {
            try {
                const { id } = paymentMethod
                // Send a post request to our server to make the payment
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: 1000,
                    id
                })

                // If payment is successful according to our server
                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
                // For demo purposes, allowing navigation even on payment failure
                setSuccess(true)
            }
        } else {
            console.log(error.message)
        }
    }

    // Log the payment data for debugging
    console.log(data);

    return (
        <>
            {/* If payment is not yet successful, show payment form */}
            {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            {/* Card Element for payment input */}
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
                :
                // On successful payment, navigate back to 'PostJob' with relevant state data
                navigate('/user/postJob', { state: { postJobData: data, paymentSuccess: true } })
            }
        </>
    )
}
