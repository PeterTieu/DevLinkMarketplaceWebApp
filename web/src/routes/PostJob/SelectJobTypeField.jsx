// import React, { useState, useEffect } from 'react'
// import { Form, Radio } from 'semantic-ui-react'
// import './Field.css'


// const SelectJobTypeField = (props) => {

//     const [selection, setSelection] = useState('');

//     useEffect(() => {
//         if (props.selectedJobType) {
//             setSelection(props.selectedJobType);
//         }
//     }, [props.selectedJobType]);

//     function handleChange(e, { value }) {
//         setSelection(value);

//         //Function passed from parent as prop
//         //i.e., App.js -> NewJobSection.jsx -> SelectJobTypeField.jsx
//         props.setSelectedJobType(value)
//     }

//     return (
//         <Form className='form'>

//             <Form.Field>
//                 Selected Job Type:
//             </Form.Field>

//             <div className='radio-buttons-div'>
//                 <Form.Field>
//                     <Radio
//                         label='Freelance'
//                         name='radioGroup'
//                         value='Freelance'
//                         checked={selection === 'Freelance'} //'Dot' what is selected
//                         onChange={handleChange}
//                     />
//                 </Form.Field>

//                 <Form.Field>
//                     <Radio
//                         label='Employment'
//                         name='radioGroup'
//                         value='Employment'
//                         checked={selection === 'Employment'} //'Dot' what is selected
//                         onChange={handleChange}
//                     />
//                 </Form.Field>
//             </div>

//         </Form>
//     );
// }

// export default SelectJobTypeField;


import React, { useState, useEffect } from 'react';
import { Form, Radio } from 'semantic-ui-react';
import './Field.css';

// "Select Job Type" field
const SelectJobTypeField = (props) => {

    // Initialise selection state.
    const [selection, setSelection] = useState('');

    // Update selection state if prop changes.
    useEffect(() => {
        if (props.selectedJobType) {
            setSelection(props.selectedJobType);
        }
    }, [props.selectedJobType]);

    // Update state and inform parent component when selection changes.
    function handleChange(e, { value }) {
        setSelection(value);
        props.setSelectedJobType(value)
    }

    return (
        <Form className='form'>
            <Form.Field>
                Selected Job Type:
            </Form.Field>
            <div className='radio-buttons-div'>
                <Form.Field>
                    <Radio
                        label='Freelance'
                        name='radioGroup'
                        value='Freelance'
                        checked={selection === 'Freelance'}
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Employment'
                        name='radioGroup'
                        value='Employment'
                        checked={selection === 'Employment'}
                        onChange={handleChange}
                    />
                </Form.Field>
            </div>
        </Form>
    );
}

export default SelectJobTypeField;
