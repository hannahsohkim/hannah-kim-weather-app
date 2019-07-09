import React from 'react';

const Weather = (props) => {
  return (
    <div>
      {props.description && <h3> You can expect {props.description} today </h3>}
      {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
      {props.date && <p>Date: {props.date}</p>}
      {props.temp && <p>Temperature: {props.temp}</p>}
      {props.max && <p>High: {props.max}</p>}
      {props.min && <p>Low: {props.min}</p>}
      <p></p>

    </div>
  )
}

export default Weather;