import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Banner from './components/Banner'
import Footer from './components/Footer'
const index = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Landing />
      <Banner />
      <Footer/>
    </div>
  )
}

export default index
