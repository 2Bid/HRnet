import React from 'react';
import GridTable from '@nadavshaar/react-grid-table'
import { useSelector } from 'react-redux'
import { columns } from "./Columns"

export default function GridTableContainer() {

  const employees = useSelector((state)=>state.reducer)

  return (
    <GridTable columns={columns} rows={employees} pageSizes={[10,25,50,100]}/>
  )
}