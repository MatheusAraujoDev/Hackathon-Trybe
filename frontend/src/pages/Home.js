import React, { useEffect, useState } from 'react';
import CityCard from '../components/CityCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/home.css';

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
      <h1 className='title-home'>Cidades</h1>
      <section className='section-css'>
        {cities.map((city, index) => {
          return (
            <CityCard city={city} key={`city-${index}`} />
          )
        })}
      </section>
      <Footer />
    </div>
  );
}

export default Home;
