import React from 'react'
import "./NavBarStyle.css"
// import MenuItems from './MenuItems'
import {MenuItems} from './MenuItems'
// import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <nav className='NavbarItems'>
          <h1 className='navbar-logo'>Trippy</h1>
          <ul className="nav-menu">
            {
              MenuItems.map((item,index)=>{
                return(
                  <li key={index} className={item.cName}> 
                    <a href={item.url}>
                    <i class={item.icon}></i>{item.title}
                    </a>
                  </li>
                )
              })
            }
            <button>Sign Up</button>
          </ul>
      </nav>
    </div>
  )
}
