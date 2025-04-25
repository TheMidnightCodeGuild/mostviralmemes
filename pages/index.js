import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Banner from './components/Banner'
import About from './components/About'
const index = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Landing />
      <Banner />
      <About />
    </div>
  )
}

export default index
