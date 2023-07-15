import React from 'react';
import './Banner.css'
import Button from '../UI/Button';

const Banner = ({ title, text }) => {


  return (
    <div className='banner'>
      <div>
        <h1 className='banner-title'>{title}</h1>
        <p className='banner-text'>{text}</p>
        <Button size='md' variant='primary' onClick={alert(111)}>Order Food</Button>

      </div>
    </div>
  );
};

export default Banner;
