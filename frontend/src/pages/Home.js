import React, { useEffect, useState } from 'react';
import CityCard from '../components/CityCard';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      setCities(await(await fetch('http://localhost:3001/cities')).json());
    };
    getCities();
  }, [])
  
  return (
    <div>
      <Header />
      <h1>Cidades</h1>
      <section className="city-cards-container">
        {cities.map((city, index) => {
          return (
            <CityCard city={city} key={`city-${index}`} />
          )
        })}
      </section>
    </div>
  );
}

export default Home;
