import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
  const { event } = props;

  return ( 
      <div className="event-card">
        <img src={ event.image } alt="event" className="event-image"/>
        <h2>{ event.name }</h2>
        <h2>Data de início: { event.firstDay }</h2>
        <h2>Data de encerramento: { event.lastDay }</h2>
        <p>descrição{ event.description }</p>
        <a href={event.link}>Mais informações</a>
      </div>
  );
}

export default EventCard;
