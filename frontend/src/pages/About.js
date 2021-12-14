import React from 'react';
import Header from '../components/Header';
import infos from '../utility';
import '../styles/about.css';

const About = () => {
  return (
    <div className='about'>
      <Header />
      <div className='a-card'>
        { infos.map(({ name, image, linkedin, github }, index) => {
          return (
            <div key={ index } className='card-css'>
              <img src={ image } alt={ name } />
              <p className='title'>{ name }</p>
              <a href={ linkedin } className='link-card'>Linkedin</a>
              <a href={ github } className='link-card'>Github</a>
            </div>
          )
        }) }
      </div>
    </div>
  )
};

export default About;
