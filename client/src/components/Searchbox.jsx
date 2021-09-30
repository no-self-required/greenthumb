import React from 'react'
import './Searchbox.scss'

function Searchbox({onClick, rowButton}) {
  
  return (
    <div className={`${rowButton ? "searchRow" : "searchbox"}`}>    {/* if rowbutton is true as a prop, we display search as a row */}
      <input
          id="search"
          className="search"
          type="text"
          placeholder="Search a product"
          name="search"
        />
      <button onClick={e =>  onClick(document.getElementById('search').value)}>
        Eco-fy
      </button>
    </div>
  )
}

export default Searchbox
