import React from 'react'
import SelectContainer from '../select/Select'

import './form.css'

export default function Form() {
  return (
    <form action="#" id="create-employee" className='formEmployee-create'>
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label for="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label for="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <div className="address">
            <legend>Address</legend>

            <label for="street">Street</label>
            <input id="street" type="text" />

            <label for="city">City</label>
            <input id="city" type="text" />

            <label for="state-button">State</label>
            <SelectContainer />
            
            <label for="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
        </div>

        <label for="department-button">Department</label>
        <SelectContainer />

        <div className='button__container'>
            <button type='submit'>Save</button>
        </div>
    </form>
  )
}
