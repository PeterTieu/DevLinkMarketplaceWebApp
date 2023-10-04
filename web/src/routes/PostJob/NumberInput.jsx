import React, { useState, useEffect } from 'react'
import './Input.css'

// Input field for numbers
const NumberInput = (props) => {

    // Initialise state for the input value
    const [inputValue, setInputValue] = useState('') //Set the input value

    // Update input value based on external changes to props.initialValue
    useEffect(
        () => {
            if (props.projectLength) {
                setInputValue(props.projectLength);
            }
            if (props.paymentMin) {
                setInputValue(props.paymentMin);
            }
            if (props.paymentMax) {
                setInputValue(props.paymentMax);
            }
            if (props.workingHours) {
                setInputValue(props.workingHours);
            }
            if (props.forAtLeast) {
                setInputValue(props.forAtLeast);
            }
        },
        [props.projectLength,
        props.paymentMin,
        props.paymentMax,
        props.workingHours,
        props.forAtLeast]
    );

    // Handle changes to the input value
    const handleChange = (e) => {
        setInputValue(e.target.value);

        // Call the callback function from the parent component
        if (props.onProjectLengthChange) {
            props.onProjectLengthChange(e.target.value);
        }

        // Call the callback function from the parent component
        if (props.onPaymentMinChange) {
            props.onPaymentMinChange(e.target.value);
        }

        // Call the callback function from the parent component
        if (props.onPaymentMaxChange) {
            props.onPaymentMaxChange(e.target.value);
        }

        // Call the callback function from the parent component
        if (props.onWorkingHoursChange) {
            props.onWorkingHoursChange(e.target.value);
        }

        // Call the callback function from the parent component
        if (props.onForAtLeastChange) {
            props.onForAtLeastChange(e.target.value);
        }
    }

    return (
        <input
            className='number-input'
            type="number"
            id=""
            name=""
            min={props.min}
            max={props.max}
            step={props.step}
            onChange={handleChange}
            value={inputValue}
        />
    )
}

export default NumberInput