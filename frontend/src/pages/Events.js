import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import Header from '../components/Header';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      setEvents(await(await fetch('http://localhost:3001/events')).json());
    };
    getEvents();
  }, [])
  
  return (
    <div>
      <Header />
      <h1>Eventos</h1>
      <section className="event-cards-container">
        {events.map((event, index) => {
          return (
            <EventCard event={event} key={`event-${index}`} />
          )
        })}
      </section>
    </div>
  );
}

export default Events;