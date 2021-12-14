import React from 'react';
import '../styles/eventos.css';

const EventCard = (props) => {
  const { event } = props;

  return ( 
      <div className="event-card">
        <img src={ event.image } alt="event" className="event-image"/>
        <div className='card-info'>
          <h1 className='event-name'>{ event.name }</h1>
          <h2>Data de início: { event.firstDay }</h2>
          <h2>Data de encerramento: { event.lastDay }</h2>
          <p>{ event.description }</p>
          <div className='btn-margin'>
            <a className='btn-main' href={event.link}>Mais informações</a>
          </div>
        </div>
      </div>
  );
}

export default EventCard;
