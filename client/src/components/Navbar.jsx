import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar(props) {
  if(!props.auth) {
    return (
      <div className='nav'>
        <Link to="/login">Login/Signup</Link>
      </div>
    )
  } else {
    return (
      <div className='nav'>
        {props.user.username}
        <Link to="/login">Logout</Link>
      </div>
    )
  }
  
  
}

export default Navbar
