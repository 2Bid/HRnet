import React from 'react'
import {Link} from 'react-router-dom'
import Form from '../../components/form/Form';

import './home.css'

export default function Home() {
  return (
    <div className='home'>
      <h1>HRNet</h1>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <Form />
    </div>
  )
}
