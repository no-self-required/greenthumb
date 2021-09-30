import axios from 'axios';
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import Navbar from '../Navbar';
import Searchbox from '../Searchbox'
import './Products.scss'
import Sidebar from './Sidebar';
import SingleProduct from './SingleProduct';

function Products() {
  const location = useLocation();
  const productsArray = location.state.props.slice(0, 9);

  const history = useHistory();

  const handleSearch = (input) => {
    const params = {
      method: 'GET',
      url: 'https://amazon24.p.rapidapi.com/api/product',
      params: {
        categoryID: 'aps',
        page: '1',
        country: 'US',
        filter: 'aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y',
        keyword: `eco friendly ${input}`
      },
      headers: {
        'x-rapidapi-host': 'amazon24.p.rapidapi.com',
        'x-rapidapi-key': '3cc3b85d09msh2e9a0df57326101p185615jsn2402a0cb5536'
      }
    }
    
    axios.request(params).then(function (response) {
      history.push('/products', {props: response.data.docs})
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  
  const products = productsArray.map((i, index) => {
    return (
      <SingleProduct 
        key={index}
        name={i.product_title}
        price={i.app_sale_price}
        rating={i.evaluate_rate}
        img={i.product_main_image_url}
        details={i.product_detail_url}
      />
    )
  })

  return (
    <div className='product_page'>  
      <div className="column1">
        <Navbar />
        <Searchbox rowButton={true} onClick={handleSearch}/>
        <div className='layout'>
          <div className="products">
            {products}
          </div>
        </div>
      </div>
      <div className="column2">
        <Sidebar />
      </div> 
    </div>
  )
}

export default Products
