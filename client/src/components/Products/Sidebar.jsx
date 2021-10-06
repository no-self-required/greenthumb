import React, { useState } from 'react'
import { Button, Typography } from "@mui/material";
import { Card, CardMedia } from '@mui/material';
import './Sidebar.scss'

function Sidebar({savedProducts}) {
  const [isToggled, setIsToggled] = useState(false);      //This is to tell if the sideBar is toggled or not

  const list = savedProducts.map(product => (
    <div id="sideCard">
    <Card sx={{ maxWidth: 225, maxHeight: 210 }}>
      <div className='sideProduct'>
        <CardMedia>
          <img id="sideimg" src={product.img}></img>
        </CardMedia>
        <div className="sideInfo">
        <Typography sx={{ fontSize: "10px" }}>{product.name}</Typography>
        </div>
      </div>
    </Card>
    </div>
    )
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

