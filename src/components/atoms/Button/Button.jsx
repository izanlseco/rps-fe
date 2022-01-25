import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button
      className="button"
      role="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button