import React, { useState } from 'react'
import './Sidebar.scss'

function Sidebar() {
  const [isToggled, setIsToggled] = useState(false);      //This is to tell if the sideBar is toggled or not

  const handleClick = () => {
    (isToggled ? setIsToggled(false) : setIsToggled(true))
  }

  return (
    (isToggled 
      ? 
      <div className='opened'>      
        <button onClick={handleClick}> {' CLOSE >>'}</button>
        
      </div> 
      : 
      <div className='closed'>
        <button onClick={handleClick}> {'<< SAVED '}</button>
      </div>)
  )
}

export default Sidebar
