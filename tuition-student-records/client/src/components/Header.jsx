import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [mobnav, setmobnav] = useState(false);
  const handleNav = ()=>{
    setmobnav(!mobnav);
  }
  return (
    <header>
        <ul>
           <Link to="/"> <li>Home</li></Link> 
           <li id="nav" >
               <Link to="/students"> <li>Students</li></Link> 
              <Link to="/tests"> <li>Tests</li></Link>
            </li>
            <button onClick={handleNav}  className="nav-btn">Menu</button>
        </ul>
        <div style={mobnav ? {display: 'flex'} : {display:"none"}} className="mobile-menu"> 
               <Link to="/students">Students</Link> 
              <Link to="/tests"> Tests</Link>
   
          </div>
    </header>
  )
}

