import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar(props) {
  if(!props.auth) {
    return (
      <div className='nav'>
        <button><Link to="/login">Login/Signup</Link></button>
      </div>
    )
  } else {
    return (
      <div className='nav'>
        Hello, {props.user.username}
        <button onClick={props.logout}><Link to="/login">Logout</Link></button>
      </div>
    )
  }
  
  
}

export default Navbar
