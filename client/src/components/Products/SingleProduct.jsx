import React from 'react'
import './SingleProduct.scss'
import { Button, } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'

function SingleProduct({name, price, rating, img, details}) {
  return (
    <div className='single_product'>
      <div className="product">
        <img src={img} alt="" />
        <span>{`***** ${rating}`}</span>
        <div className="info">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <div className="buttons">
          <div className="left">
            <a href={details} >See Details</a>
          </div>
        <div className="right">
          <Button variant="outlined">Save</Button>
            <Button variant="outlined">Share</Button>
          </div>    
        </div> 
      </div>   
    </div> 
  )
}

export default SingleProduct
