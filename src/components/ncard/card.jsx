import React from 'react';
import './card.css'

const Card = ({ title, content }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;