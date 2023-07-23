import React from 'react'
import Banner from '../../components/Layout/banner/Banner'
import Card from '../../components/Layout/card/Card'
import './Home.css'
import * as LuIcons from "react-icons/lu";
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Banner
        title="Welcome to Our Website"
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at quis risus sed vulputate. Nullam non nisi est sit. Dictum sit amet justo donec. Semper quis lectus nulla at volutpat diam ut.'
      />
      <div className='container'>
        <div className='card-wrap'>
          <Card icon={<LuIcons.LuChefHat />} title='Master Chefs' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
          <Card icon={<MdIcons.MdFastfood />} title='Quality Food' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
          <Card icon={<LuIcons.LuShoppingCart />} title='Online Order' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
          <Card icon={<RiIcons.RiCustomerServiceFill />} title='24/7 Service' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        </div>
        <div className='about-wrap'>
          <img src='https://images.unsplash.com/photo-1632762346768-80b093fc5f38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
          <div className='about-content'>
            <h1>Welcome to <MdIcons.MdFastfood />Food App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className='about-stats'>
              <div className="block">
                <div className='column'>
                  <p>99</p>
                </div>
                <p>Years of</p>
                <p>experience</p>
              </div>
              <div className="block">
                <div className='column'>
                  <p>99</p>
                </div>
                <p>Popular</p>
                <p>master chefs</p>
              </div>
            </div>
            <Link to="/about">
              <Button size='md' variant='primary'>Read More</Button>
            </Link>
          </div>
        </div>

      </div>
    </>


  )
}

export default Home