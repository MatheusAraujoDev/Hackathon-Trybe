import React, { useState } from 'react';
import MainContext from './MainContext';

const MainProvider = ({ children }) => {
  const [city, setCity] = useState();
  const [cities, setCities] = useState();
  const [events, setEvents] = useState();

  return (
    <MainContext.Provider value={ { city, setCity, cities, setCities, events, setEvents } }>
      { children }
    </MainContext.Provider>
  )
};

export default MainProvider;
