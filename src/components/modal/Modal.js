import React from 'react'

import './modal.css'

export default function Modal({openModal}) {
  return (
    <>
      <div className='modal__container'>
        <span className='modal__close' onClick={()=>{openModal(false)}}></span>
        <p>Employee Created!</p>
      </div>
      <div className='blocker'></div>
    </>
  )
}
