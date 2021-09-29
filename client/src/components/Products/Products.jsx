import React from 'react'
import { useLocation } from 'react-router'
import Searchbox from '../Searchbox'
import './Products.scss'
import SingleProduct from './SingleProduct';

function Products() {
  const location = useLocation();
  const productsArray = location.state.props.slice(0, 9);
  console.log(productsArray)
  
  const products = productsArray.map((i, index) => {
    return (
      <SingleProduct 
        key={index}
        name={i.product_title}
        price={i.app_sale_price}
        rating={i.evaluate_rate}
        img={i.product_main_image_url}
      />
    )
  })

  return (
    <div className='product_page'>
      <Searchbox rowButton={true}/>
      <div className="products">
        {products}
      </div>
    </div>
  )
}

export default Products
