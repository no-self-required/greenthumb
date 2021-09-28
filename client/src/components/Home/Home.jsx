import React, {useState} from 'react'
import './Home.scss'
const axios = require('axios');

function Home() {
  const [keyword, setKeyword] = useState('')

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
