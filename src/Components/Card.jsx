import "./Card.css";
const Card = () => {
  return (
    <div className="card__container">
      <div className="card__subcontainer">
        <div className="card__photo"></div>
        <div>
          <h3 className="card__heading">Executive Producer</h3>
          <p className="card__details"> 
            in egestas erat imperdiet sed euismod nisi porta lorem mollis
            aliquam ut porttitor leo a diam sollicitudin tempor id eu
          </p>
          <button className="card__button">View Details </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
