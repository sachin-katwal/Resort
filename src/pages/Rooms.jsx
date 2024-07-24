import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

function Rooms() {
  return (
    <Hero hero="roomsHero">
      <Banner title='Our Rooms' >
       <Link to='/' className='btn-primary'>
       Return Home
       </Link>
      </Banner>
    </Hero>
  )
}

export default Rooms