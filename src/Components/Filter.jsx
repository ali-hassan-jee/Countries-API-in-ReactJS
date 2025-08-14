
function Filter ({SetSelectedOption,SelectedOption}) {
  
  const handleChange = (event) => {
    SetSelectedOption(event.target.value); // 👈 Get selected value
    
  };
    return (
        <div className="filter-container">
    <select name="" id="Filter-countries" value={SelectedOption} onChange={handleChange}>
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  </div>
    )
    
    
}

export default Filter
