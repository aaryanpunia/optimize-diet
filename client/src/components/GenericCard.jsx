import React from 'react';
import "../static/css/GenericCard.css";

function GenericCard(props) {

  return (
    <div className="cardContainer" style={props.style}>
      <span className="cardText">{props.text}</span>
    </div>
  );
}

export default GenericCard;