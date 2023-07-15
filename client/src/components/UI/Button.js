import React from 'react'


const Button = ({ type, variant, children, size, onClick }) => {
  const btnStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    padding: `0 ${size === 'sm' ? '2rem' : size === 'md' ? '3rem' : size === 'lg' ? '5rem' : '2rem'}`,
    height: `${size === 'sm' ? '40px' : size === 'md' ? '45px' : size === 'lg' ? '50px' : '40px'}`,
    fontWeight: '500',
    fontSize: '20px',
    textTransform: 'uppercase',
    border: 'none',
    color: '#f5f5f5',
    backgroundColor: `${variant === 'primary' ? '#feaf39' : variant === 'secondary' ? '#0f172b' : variant === 'error' ? '#eb0029' : '#feaf39'}`
  };

  return (
    <button style={btnStyle} onClick={onClick}>{children}</button>
  )
}

export default Button