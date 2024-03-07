import React from 'react';
import './card.css'

const Card = ({ title, content }) => {
  return (
    <div className="card-container">
      <h2 className='card-title'>{title}</h2>
      <p className='card-content'>{content}</p>
    </div>
  );
}

export default Card;