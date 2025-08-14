import { StrictMode, useContext, useEffect, useState } from "react";
import "./index.css";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/Filter";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";
import ThemeContext from "./contexts/ThemeContext";
// import CountriesData from './CountriesData.json'
function App() {
  const {isDark}=useContext(ThemeContext);
  
  
  const [countries, setCountries] = useState([]);
  const [query,setQuery]=useState("")
  const [region,setRegion]=useState('all')
  const [loading,setLoading]=useState(true);
 

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population"
    )
      // fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <>
    <div className="skeleton-cards-container">
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
      <SkeletonCard/>
    </div>
    </>
  );
  return (
    <>
      <main className={isDark?'dark':''} >
        <div className="search-filter-container">
          <SearchBar  SetQuery={setQuery}/>
          <Filter SelectedOption={region} SetSelectedOption={setRegion} />
        </div>
        <div className={`cards-container ${isDark?'dark':''}`} >
          {countries.filter((country) =>
              country.name.common.toLowerCase().includes(query)
            ).filter((country)=>{
                if(region=='all')
                    return true
                else
                    return country.region.toLowerCase()==region
            })
            .map((country) => {
              return (
                <Link className="card-link" to={`/country/${country.name.common}`}> <CountryCard
                  Flag={country.flags.svg}
                  Capital={country.capital}
                  Region={country.region}
                  Name={country.name.common}
                  Population={country.population}
                />
                </Link>
              );
            })}
        </div>
      </main>
    </>
  );
}

export default App;
