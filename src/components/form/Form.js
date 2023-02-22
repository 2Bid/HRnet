import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from '../../actions'
import InputDatepickerContainer from '../inputDatepicker/InputDatepicker'
import Modal from '../modal/Modal'
import SelectContainer from '../select/Select'

import { states } from '../select/lists/states'
import { departments } from '../select/lists/departments'

import './form.css'

export default function Form() {

  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateBirth, setDateBirth] = useState()
  const [startDate, setStartDate] = useState()
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState()
  const [postalCode, setPostalCode] = useState()
  const [department, setDepartment] = useState()

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleChangeLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleChangeDateBirth = (e) => {
    setDateBirth(e)
  }
  const handleChangeStartDate = (e) => {
    setStartDate(e)
  }

  const handleChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value)
  }

  const handleChangePostalCode = (e) => {
    setPostalCode(e.target.value)
  }

  const [isFormSubmit, setIsFormSubmit]  = useState(false)

  // id begin at 2, because first is in the exemple
  const [idCounter, setIdCounter] = useState(2)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setIsFormSubmit(true)
    dispatch(createEmployee({
      id : idCounter,
      firstname : firstName,
      lastname : lastName,
      dateBirth : dateBirth,
      startDate : startDate,
      street : street,
      city : city,
      state : state,
      zipcode : postalCode,
      department : department
    }))
    setIdCounter(idCounter + 1)
  }

  const handleChangeState = (e) => {
    setState(e.value)
  }

  const handleChangeDepartment = (e) => {
    setDepartment(e.value)
  }


  return (
    <>
      <form id="create-employee" className='formEmployee-create'>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" value={firstName} onChange={(e)=>handleChangeFirstName(e)}/>

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" value={lastName} onChange={(e)=>handleChangeLastName(e)}/>

        <label htmlFor="date-of-birth">Date of Birth</label>
        <InputDatepickerContainer onChange={(e)=>handleChangeDateBirth(e)}/>

        <label htmlFor="start-date">Start Date</label>
        <InputDatepickerContainer onChange={(e)=>handleChangeStartDate(e)}/>

        <div className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" value={street} onChange={(e)=>handleChangeStreet(e)} />

          <label htmlFor="city">City</label>
          <input id="city" type="text" value={city} onChange={(e)=>handleChangeCity(e)}/>

          <label htmlFor="state-button">State</label>
          <SelectContainer options={states} onChange={(e)=>{handleChangeState(e)}}/>
          
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" value={postalCode} onChange={(e)=>handleChangePostalCode(e)}/>
        </div>

        <label htmlFor="department-button">Department</label>
        <SelectContainer options={departments} onChange={(e)=>{handleChangeDepartment(e)}}/>

        <div className='button__container'>
          <button type='submit' onClick={(e)=>{handleFormSubmit(e)}}>Save</button>
        </div>
      </form>
      
      {isFormSubmit ? <Modal openModal={setIsFormSubmit}/> : <></>}
    </>
  )
}
