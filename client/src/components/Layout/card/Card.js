import React from 'react'
import './Card.css'

const Card = ({ icon, title, text }) => {
  return (
    <div className='card'>
      <p>{icon}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Card