function SkeletonCardDetails() {
  return (
    <main>
      <p className="skeleton-back-btn"></p>
      <div className="skeleton-country-info-container">
        <div className="skeleton-flag-image-container">
          <img className="flag-image" alt="" />
        </div>
        <div className="skeleton-country-text-container">
          <h2 className="countryName"></h2>

          <div className="country-info">
            <p className="country-info-items"></p>
            <p className="country-info-items"></p>
            <p className="country-info-items"></p>
            <p className="country-info-items"></p>
            <p className="country-info-items"></p>
            <p className="country-info-items"></p>
            <p className="country-info-items"></p>
            <p className="country-info-items"></p>
          </div>
          <div className="country-borders">
            <p></p>
            <div className="border-btns"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SkeletonCardDetails;
