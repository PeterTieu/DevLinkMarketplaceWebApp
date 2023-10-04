import React from 'react'
import './Section.css'
import './Field.css'
import SectionHeader from './SectionHeader'
import AddAnImageField from './AddAnImageField'

//Section to add images
const AddAnImageSection = (props) => (

    <div className='section'>
        <SectionHeader text='Add An Image' />

        <div>
            <AddAnImageField />
        </div>
    </div >
)

export default AddAnImageSection