import React from 'react'
import navData from '../NavData'
import './Navbar.css'

export default function NavBar() {
  return (
    <nav className=' flex flex-row my-4 mx-6  '>
        <h1 className='title animated-text  '>GoTrips</h1>
        {/* <div className='hamburger-menu'>

        </div> */}
          <ul className=' grow  flex flex-row   place-content-evenly  '>
            {navData.map((navs)=>{
              return(
                <li className='bg-red-500'>{navs.navMenu}</li>
              )              
            })}
          </ul>
          <div className='flex flex-row justify-between mr-4 gap-4'>
           <button className='bg-black text-white rounded-xl  px-6'>login</button>
           <button className='border-black border-2 rounded-xl px-4'> Sign Up</button>        
          </div>
       
    </nav>
  )
}
