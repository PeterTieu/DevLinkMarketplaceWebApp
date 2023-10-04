// import React, { useState, useEffect } from 'react'
// import './Input.css'

// const MultipleLineTextInput = (props) => {

//     const [inputValue, setInputValue] = useState('') //Set the input value

//     useEffect(
//         () => {
//             if (props.jobDescription) {
//                 setInputValue(props.jobDescription);
//             }
//             if (props.skills) {
//                 setInputValue(props.skills);
//             }
//         },
//         [props.jobDescription, props.skills]
//     );

//     const handleChange = (e) => {
//         setInputValue(e.target.value);

//         // Call the callback function from the parent component
//         if (props.onJobDescriptionChange) {
//             props.onJobDescriptionChange(e.target.value);
//         }

//         // Call the callback function from the parent component
//         if (props.onSkillsChange) {
//             props.onSkillsChange(e.target.value);
//         }
//     }

//     return (
//         <textarea className='multiple-line-text-input'
//             id=""
//             name=""
//             rows="5"
//             cols="50"
//             value={inputValue}
//             placeholder={props.placeholder}
//             onChange={handleChange}>
//         </textarea>
//     )
// }

// export default MultipleLineTextInput


import React, { useState, useEffect } from 'react'
import './Input.css'

// Component for multi-line text input
const MultipleLineTextInput = (props) => {

    // Maintain a piece of state for the value of the input
    const [inputValue, setInputValue] = useState('')

    // Use effect hook to set the input value based on incoming props, when they change
    useEffect(() => {
        if (props.jobDescription) {
            setInputValue(props.jobDescription);
        }
        if (props.skills) {
            setInputValue(props.skills);
        }
    }, [props.jobDescription, props.skills]);

    // Handle changes to the input value
    const handleChange = (e) => {
        setInputValue(e.target.value);

        // Conditionally call relevant callback prop when input changes
        if (props.onJobDescriptionChange) {
            props.onJobDescriptionChange(e.target.value);
        }

        // Conditionally call relevant callback prop when input changes
        if (props.onSkillsChange) {
            props.onSkillsChange(e.target.value);
        }
    }

    // Render a textarea with relevant props and event handlers
    return (
        <textarea className='multiple-line-text-input'
            // Assign a dynamic ID, name, and placeholder to cater for different use cases (optional)
            id={props.id || ""}
            name={props.name || ""}
            rows="5"
            cols="50"
            value={inputValue}
            placeholder={props.placeholder}
            onChange={handleChange}>
        </textarea>
    )
}

export default MultipleLineTextInput
