import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Banner from './components/Banner'
const index = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Landing />
      <Banner />
    </div>
  )
}

export default index
