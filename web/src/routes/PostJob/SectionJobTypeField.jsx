import React, { useState } from 'react'
import { Form, Radio } from 'semantic-ui-react'
import './Field.css'

// "Select Job Type" field for the Post Job page
const SelectJobTypeField = (props) => {

    const [selection, setSelection] = useState('');

    function handleChange(e, { value }) {
        setSelection(value);
        props.setSelectedJobType(value) //Function passed from parent as prop
        //                                i.e., App.js -> NewJobSection.jsx -> SelectJobTypeField.jsx
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
                        checked={selection === 'Freelance'} //'Dot' what is selected
                        onChange={handleChange}
                    />
                </Form.Field>

                <Form.Field>
                    <Radio
                        label='Employment'
                        name='radioGroup'
                        value='Employment'
                        checked={selection === 'Employment'} //'Dot' what is selected
                        onChange={handleChange}
                    />
                </Form.Field>
            </div>

        </Form>
    );
}

export default SelectJobTypeField;