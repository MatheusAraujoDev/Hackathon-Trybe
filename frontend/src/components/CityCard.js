import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = (props) => {
  const { city } = props;

  return ( 
    <Link className='div-home' to={`/cities/${city._id}`}>
      <div className="card-home">
        <img src={ city.image } alt="city" className="city-image"/>
        <h3 className='card-text'>{ city.name }</h3>
        <h3 className='card-text'>{ city.state }</h3>
      </div>
    </Link>
  );
}

export default CityCard;
