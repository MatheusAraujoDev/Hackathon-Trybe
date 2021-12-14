import React from 'react';
import { Link } from 'react-router-dom';
import './CityCard.css';

const CityCard = (props) => {
  const { city } = props;

  return ( 
    <Link to={`/city/${city._id}`}>
      <div className="city-card">
        <img src={ city.image } alt="city" className="city-image"/>
        <h2>{ city.name }</h2>
        <h2>{ city.state }</h2>
      </div>
    </Link>
  );
}

export default CityCard;
