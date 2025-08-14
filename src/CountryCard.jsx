function CountryCard({Name,Population,Region,Capital,Flag}) {
  return (
    <>
      <div className="card">
        <img src={Flag} alt="" className="card-img" />
        <div className="card-text">
          <h2 className="country-name">{Name} </h2>
          <p className="population">
            Population: <span>{Population}</span>
          </p>
          <p className="region">
            Region: <span>{Region}</span>
          </p>
          <p className="capital">
            Capital: <span>{Capital}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
