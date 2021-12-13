import React from 'react';
import CityCard from '../components/CityCard';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <section className="city-cards-container">
        <CityCard />
        <CityCard />
      </section>
    </div>
  );
}

export default Home;
