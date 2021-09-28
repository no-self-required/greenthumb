import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar(props) {
  return (
    <div className='nav'>
      <Link to="/login">Login/Signup</Link>
      Hello
    </div>
  )
}

export default Navbar
