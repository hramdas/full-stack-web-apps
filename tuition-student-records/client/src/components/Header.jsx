import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <ul>
           <Link to="/"> <li>Home</li></Link> 
           <li id="nav" >
               <Link to="/students"> <li>Students</li></Link> 
                <Link to="/tests"> <li>Tests</li></Link>
            </li>
            
        </ul>
    </header>
  )
}

