import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

// Public key for Stripe
const PUBLIC_KEY = "pk_test_51NuUvcJ50xExVAy71t8M1vohetbksfAxgiXRAEXARDp8dVtkWcCivqcxwtkAyNhMGN17bFFGbfZwAEHieVLsIEqH00kDEzNSkt"

// Create a Stripe.js instance with the provided public key
const stripeTestPromise = loadStripe(PUBLIC_KEY)

// Define a StripeContainer component that wraps the PaymentForm component in Stripe's Elements provider
export default function StripeContainer({ data }) {
    return (
        <Elements stripe={stripeTestPromise}>
            {/* Render PaymentForm and pass data from PostJob.jsx to it */}
            <PaymentForm data={data} />
        </Elements>
    );
}