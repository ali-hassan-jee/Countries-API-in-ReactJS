import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./Country.css";
import { useNavigate } from "react-router-dom";
import SkeletonCardDetails from "./SkeletonCardDetails";
function CountryDetails() {
  const navigate = useNavigate();
  const { name } = useParams(); // Get the country name from URL
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borderCountries, setBorderCountries] = useState([]);


  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country:", error);
        setLoading(false);
      });
  }, [name]);
  
 useEffect(() => {
  if (country && country.borders && country.borders.length > 0) {
    const codes = country.borders.join(",");
    fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
      .then((res) => res.json())
      .then((data) => {
        const borderList = data.map((c) => ({
          name: c.name.common,
          code: c.cca3,
        }));
        setBorderCountries(borderList);
      })
      .catch((err) => {
        console.error("Error fetching border countries:", err);
        setBorderCountries([]);
      });
  } else {
    setBorderCountries([]); // No borders
  }
}, [country]);



  if (loading) return <SkeletonCardDetails/>;

  if (!country) return <p>Country not found.</p>;
  
  return (
    <main>
      <p
        className="back-btn"
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fa-solid fa-arrow-left" /> Back
      </p>
      <div className="country-info-container">
        <div className="flag-image-container">
          <img className="flag-image" src={country.flags.svg} alt="" />
        </div>
        <div className="country-text-container">
         <h2 className="countryName">{country.name.common}</h2>

          <div className="country-info">
            <p>
              <strong>Native Name:</strong>&nbsp;
              <span className="native-name">{country.name.common}</span>
            </p>
            <p>
              <strong>Population:</strong>&nbsp;
              <span className="Population">{country.population}</span>
            </p>
            <p>
              <strong>Region:</strong>&nbsp;
              <span className="region">{country.region}</span>
            </p>
            <p>
              <strong>Sub Region:</strong>&nbsp;
              <span className="sub-region">{country.subregion}</span>
            </p>
            <p>
              <strong>Capital:</strong>&nbsp;
              <span className="capital">{country.capital?.join(", ") || "N/A"}</span>

            </p>
            <p>
              <strong>Top Level domain:</strong>&nbsp;
              <span className="top-level-domain">{country.tld}</span>
            </p>
            <p>
              <strong>Currencies:</strong>&nbsp;
              <span className="currency">{`${
                Object.entries(country.currencies)[0][1].name
              } (${Object.entries(country.currencies)[0][1].symbol})`}</span>
            </p>
            <p>
              <strong>Languages:</strong>&nbsp;
              <span className="languages">
                {Object.values(country.languages).join(", ")}
              </span>
            </p>
          </div>
          <div className="country-borders">
            <p>
              <strong>Border Countries</strong>
            </p>
           <div className="border-btns">
  {borderCountries.length > 0 ? (
    borderCountries.map((border) => (
      <Link key={border.code} className="border-btn" to={`/country/${border.name}`}>
        {border.name}
      </Link>
    ))
  ) : (
    <p>No Border Countries</p>
  )}
</div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetails;
