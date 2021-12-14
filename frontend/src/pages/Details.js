import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/city.css'

export default function Details() {
  const getId = useLocation().pathname;
  const id = getId.split('/')[2];

  const [city, setCity] = useState([]);

  useEffect(() => {
    const getCityById = async () => {
      (await fetch(`http://localhost:3001/cities/${id}`)).json()
      .then((result) => setCity(result));
    };
    getCityById();
  }, [id])


  return (
    <div>
      <Header />
      <div className='center-div'>
        <div className="city-details">
          <img src={ city.image } alt="city" className="image-details"/>
          <h1 className='title-details'>{ city.name }</h1>
          <h2 className='title-details'>{ city.state }</h2>
          <p className='description-details'>{ city.description }</p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
