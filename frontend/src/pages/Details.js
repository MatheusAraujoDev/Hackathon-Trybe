import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
    <div className="city-details">
      <Header />
      <img src={ city.image } alt="city" className="city-image"/>
      <h2>{ city.name }</h2>
      <h2>{ city.state }</h2>
      <p>{ city.description }</p>
      <Footer />
    </div>
  )
}
