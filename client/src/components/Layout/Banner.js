import React from 'react';
import './Banner.css'
import Button from '../UI/Button';

const Banner = ({ title, text }) => {

  const test = () => {
    alert(111)
  }

  return (
    <div className='banner'>
      <div>
        <h1 className='banner-title'>{title}</h1>
        <p className='banner-text'>{text}</p>
        <Button size='md' variant='primary' onClick={test}>Order Food</Button>
      </div>
    </div>
  );
};

export default Banner;
