import React from 'react'

function Name(props) {
  return (
    <div className='name'>{props.name} {props.id} {props.class}</div>
  )
}

export default Name