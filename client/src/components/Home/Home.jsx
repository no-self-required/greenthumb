import React, { useState }from 'react';
import './Home.scss';
import { useHistory } from 'react-router-dom'
import SearchBox from './searchbox';

const Home = () => {

  // const [search, setSearch] = useState({
  //   searchField:''
  // })
  
  const history = useHistory();
  return (
    <div className='main'>
      <h1>Greenthumb</h1>
        <SearchBox />
        {/* <input type="search" placeholder="Search a product..."/> */}
        <button type="submit" onClick={() => history.push('/products')}>Eco-fy</button>
    </div>
  )
}

export default Home

//<input type="search" className='search' placeholder="Search a product..."/>
