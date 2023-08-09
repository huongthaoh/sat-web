import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import StudentCard from './StudentCard'
import StudentFeedback from './StudentFeedback'


function Home() {
  return (
    <div className=''>
      <Hero/>
      {/* <About/> */}
      <StudentCard/>
      <StudentFeedback/>
      <Contact/>
    </div>
  )
}

export default Home