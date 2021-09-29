import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'

function Navbar(props) {

  if(!props.auth) {
    return (
      <div className='nav'>
        <div className="item">
          <button><Link to="/login">Login/Signup</Link></button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='nav'>
        <Link to="/idea">Idea</Link>
        <Link to="/shops">Local Shops</Link>
        Hello, {props.user.username}
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  }
  

}

export default Navbar
