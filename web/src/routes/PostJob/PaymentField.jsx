import React from 'react'
import './Field.css'
import Prompt from './Prompt'
import NumberInput from './NumberInput'

// "Payment" field for the Post Job page
const PaymentField = (props) => (

    <div className='field-div'>

        <Prompt text="Payment" />

        <div className='min-max-div'>
            <Prompt text="Min" />

            <NumberInput
                paymentMin={props.paymentMin}
                min="0"
                max="50000"
                step="1"
                onPaymentMinChange={props.onPaymentMinChange}
            />
        </div>

        <div className='min-max-div'>
            <Prompt text="Max" />

            <NumberInput
                paymentMax={props.paymentMax}
                min="0"
                max="100000"
                step="1"
                onPaymentMaxChange={props.onPaymentMaxChange}
            />
        </div>

    </div>
)

export default PaymentField