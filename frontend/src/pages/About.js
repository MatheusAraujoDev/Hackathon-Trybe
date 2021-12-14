import React from 'react';
import Header from '../components/Header';
import infos from '../utility';

const About = () => {
  return (
    <div>
      <Header />
      { infos.map(({ name, linkedin, github }) => {
        return (
          <div>
            <p>{ name }</p>
            <a href={ linkedin }>Linkedin</a>
            <a href={ github }>Github</a>
          </div>
        )
      }) }
    </div>
  )
};

export default About;


