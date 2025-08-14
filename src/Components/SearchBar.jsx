import { useState } from "react"

function SearchBar ({SetQuery}) {
  
    return (
        <>
       
  <div className="search-container">
    <i className="fa-solid fa-magnifying-glass" />
    <input
      type="text"
      id="search-input"
      placeholder="Search for a country..."
      onChange={(e)=>{SetQuery(e.target.value)}}
    />
  
  </div>

        </>
    )
}

export default SearchBar
