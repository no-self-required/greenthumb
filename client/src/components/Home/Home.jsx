import React, { useState }from 'react';
import './Home.scss';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Searchbox from '../Searchbox';
// import SearchBox from './searchbox';

const Home = () => {
  const history = useHistory();

  const handleSearch = (input) => {
    console.log(input)
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

  return (
    <div className='main'>
      <h1>Greenthumb</h1>     
        <Searchbox onClick={e => handleSearch(document.getElementById('search').value)} rowButton={false}/>
    </div>
  )
}

export default Home