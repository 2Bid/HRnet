import React from 'react'
import Datepicker from 'datepicker-input-react'
import "datepicker-input-react/dist/index.css"

export default function InputDatepickerContainer({onChange}) {

  return (
    <Datepicker onChange={onChange}/>
  )
}
