import React, { useState } from 'react'
import { Button } from "@mui/material";

import './Sidebar.scss'

function Sidebar({savedProducts}) {
  const [isToggled, setIsToggled] = useState(false);      //This is to tell if the sideBar is toggled or not

  const list = savedProducts.map(product => (
    <div className='product'>
      <img src={product.img}></img>
      <p>{product.name}</p>
    </div>)
  ) 

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
        {list}     
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
