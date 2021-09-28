import React, { useState }from 'react';
import './Home.scss';
import { useHistory } from 'react-router-dom'
// import SearchBox from './searchbox';

const Home = ({onClick}) => {
  
  const history = useHistory();

  return (
    <div className='main'>
      <h1>Greenthumb</h1>     
        <input
          id="search"
          className="search"
          type="text"
          placeholder="Search a product"
          name="search"
        />
        <button onClick={(e) => console.log(document.getElementById("search").value)}>Eco-fy</button>
    </div>
  )
}

export default Home

//console.log(document.getElementById("search").value)
//onClick(document.getElementById("search").value)

{/* <SearchBox onClick={onClick}/> */}
//<input type="search" className='search' placeholder="Search a product..."/>

// return (
//   <div className='main'>
//     <h1>Greenthumb</h1>     
//       <input
//       id="search"
//       class="search"
//       type="text"
//       placeholder="Search a product"
//       name="search"
//       value={values.search}
//       onChange={handleSearchInputChange}
//      />
//       <button onClick={(e) => onClick()}>Eco-fy</button>
//   </div>
// )
