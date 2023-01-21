import React from 'react';
import GridTable from '@nadavshaar/react-grid-table'

import { columns } from "./Columns"
import { rows } from "./Rows"

export default function GridTableContainer() {
  return (
    <GridTable columns={columns} rows={rows} pageSizes={[10,25,50,100]}/>
  )
}