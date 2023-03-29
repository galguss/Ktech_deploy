import React from 'react'

function Input({label, type, id = "", handleValue}) {
  return (
    <>
        <label className='text'><b>{label}</b></label>
        <input className='inputRes text' type={type} id={id} autoComplete="off" onChange={(e) => handleValue(e.target.value)}/>
    </>
  )
}

export default Input