import React, {useState} from 'react'
import './Home.scss'
const axios = require('axios');

function Home() {
  const [keyword, setKeyword] = useState('')

  // set up the request parameters
  // const params = {
  //   api_key: "0A9BB21DFC0B47F6AD179C67658EF72F",
  //   type: "search",
  //   amazon_domain: "amazon.com",
  //   search_term: "*"
  // }

  // make the http GET request to Rainforest API
  // function searchRequest(term) {
  //   console.log('HELLO!!');
  //   params.search_term = term

  //   axios.get('https://api.rainforestapi.com/request', { params })
  //     .then(response => {
  
  //       // print the JSON response from Rainforest API
  //       console.log(JSON.stringify(response.data, 0, 2));
  
  //     }).catch(error => {
  //       // catch and print the error
  //       console.log(error);
  //     })
  // }


  return (
    <div className='main'>
      <h1>Greenthumb</h1>
      <form onSubmit={event => event.preventDefault()}>
        <input 
          type="search" 
          placeholder="Search a product..."
          value={keyword}
          onChange={event => setKeyword(event.target.value)}
        />
      </form>
        <button>Eco-fy</button>
    </div>
  )
}

export default Home
