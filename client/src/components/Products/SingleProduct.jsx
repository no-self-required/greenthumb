import React from 'react'
import './SingleProduct.scss'

function SingleProduct({name, price, rating, img}) {
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
            <button>See detail</button>
          </div>
        <div className="right">
          <button>Save</button>
            <button>Share</button>
          </div>    
        </div> 
      </div>   
    </div> 
  )
}

export default SingleProduct
