import './index.css'
function SkeletonCard() {
  return (
    <>
      <div className="skeleton-card">
        <img  alt="" className="skeleton-card-img" />
        
          <h2 className="skeleton-country-name"></h2>
          <p className="skeleton-population">
           
          </p>
          <p className="skeleton-region">
           
          </p>
          <p className="skeleton-capital">
          
          </p>
   
      </div>
    </>
  );
}

export default SkeletonCard;
