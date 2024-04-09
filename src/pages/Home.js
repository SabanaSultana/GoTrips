import React from 'react'
import './Home.css'
import About from './About'
import Destinations from '../components/Destinations'
export default function Home() {
  return (
    <div className='homepage bg-sky-200 z-(-10) relative'>
      <div className="header content">
            <h1 className='content-title'> Hello Adventurer! Welcome to GoTrips</h1>
            <h1 className='content-title'>Your Ultimate Travel Companion</h1>        
      </div>
      <div className="destinations">
       <h1> Where would you like to travel?</h1>
        <Destinations/>
      </div>
      <div>
        <About/>
      </div>
      <div className="footer">
        footer
      </div>
    </div>
  )
}
