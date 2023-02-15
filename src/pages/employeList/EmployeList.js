import React from 'react'
import GridTableContainer from '../../components/gridTableContainer/GridTable';
import {Link} from 'react-router-dom'

import './employeList.css'

export default function EmployeList() {
  return (
    <div className='employeeList'>
        <h1>Current Employees</h1>
        <Link to="/" className='home-link'>Home page</Link>
        <GridTableContainer/>
    </div>
  )
}
