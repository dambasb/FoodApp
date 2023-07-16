import React from 'react'
import Banner from '../../components/Layout/Banner'
import Card from '../../components/Layout/Card'
import './Home.css'
import * as LuIcons from "react-icons/lu";
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'

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
      </div>
    </>


  )
}

export default Home