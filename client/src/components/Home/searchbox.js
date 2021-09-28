import React, {useState} from "react";

const SearchBox = (props) => {

  const [values, setValues] = useState({
    search: ''
  });
  
  const handleSearchInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      search: event.target.value,
    }));
  };

  return (
    <input
        id="search"
        class="search"
        type="text"
        placeholder="Search a product"
        name="search"
        value={values.search}
        onChange={handleSearchInputChange}
    />
  )
}

export default SearchBox