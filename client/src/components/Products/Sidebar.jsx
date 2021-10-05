import React, { useState } from 'react'
import { Button } from "@mui/material";

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
        <div className="head">
          <Button id='button' variant='contained' onClick={handleClick}> {' CLOSE >>'}</Button>  
        </div>     
      </div> 
      : 
      <div className='closed'>
        <div className="head">
          <Button id='button' variant='contained' onClick={handleClick}> {'<< SAVED '}</Button>
        </div>
      </div>)
  )
}

export default Sidebar
