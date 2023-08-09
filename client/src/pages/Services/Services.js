import React from 'react'
import Courses from './Courses'
import Hero from './Hero'

function Services() {
  return (
    <div className='services-container'>
      <div className="services-section">
      <Hero />
      </div>

      <div className="services-section">
        <Courses />
      </div>
      
    </div>
  )
}

export default Services