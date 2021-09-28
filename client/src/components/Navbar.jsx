import React from 'react'
import { useHistory } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  const history = useHistory();

  return (
    <div className='nav'>
      <button onClick={() => history.push('/login')}>Login/Signup</button>
    </div>
  )
}

export default Navbar

