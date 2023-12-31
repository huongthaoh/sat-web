import React from 'react'
import Contact from './Contact'
import Hero from './Hero'
import StudentCard from './StudentCard'
import StudentFeedback from './StudentFeedback'


function Home() {
  return (
    <div className=''>
      <Hero/>
      <StudentCard/>
      <StudentFeedback/>
      <Contact/>
    </div>
  )
}

export default Home