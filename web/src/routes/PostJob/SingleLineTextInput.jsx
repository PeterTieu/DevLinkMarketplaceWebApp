// import React, { useState, useEffect } from 'react'
// import './Input.css'

// const SingleLineTextInput = (props) => {

//     const [inputValue, setInputValue] = useState('') //Set the input value

//     useEffect(
//         () => {
//             if (props.titlePosition) {
//                 setInputValue(props.titlePosition);
//             }
//             if (props.experienceIn) {
//                 setInputValue(props.experienceIn);
//             }
//         },
//         [props.titlePosition,
//         props.experienceIn]
//     );

//     const handleChange = (e) => {
//         setInputValue(e.target.value);

//         // Call the callback function from the parent component
//         if (props.onTitlePositionChange) {
//             props.onTitlePositionChange(e.target.value);
//         }

//         if (props.onExperienceInChange) {
//             props.onExperienceInChange(e.target.value);
//         }
//     }

//     return (
//         <input
//             className='single-line-text-input'
//             type="text"
//             value={inputValue}
//             onChange={handleChange}
//         />
//     )
// }

// export default SingleLineTextInput



import React, { useState, useEffect } from 'react';
import './Input.css';

// Input for single line text
const SingleLineTextInput = (props) => {

    // Initialise inputValue state.
    const [inputValue, setInputValue] = useState('');

    // Update inputValue state if prop changes.
    useEffect(() => {
        if (props.titlePosition) {
            setInputValue(props.titlePosition);
        }
        if (props.experienceIn) {
            setInputValue(props.experienceIn);
        }
    }, [props.titlePosition, props.experienceIn]);

    // Update state and inform parent component when input changes.
    const handleChange = (e) => {
        setInputValue(e.target.value);

        // Inform parent component of change to titlePosition.
        if (props.onTitlePositionChange) {
            props.onTitlePositionChange(e.target.value);
        }

        // Inform parent component of change to experienceIn.
        if (props.onExperienceInChange) {
            props.onExperienceInChange(e.target.value);
        }
    }

    // Render a text input element.
    return (
        <input
            className='single-line-text-input'
            type="text"
            value={inputValue}
            onChange={handleChange}
        />
    );
}

export default SingleLineTextInput;

