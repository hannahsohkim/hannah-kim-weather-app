import React from 'react';
import styled from 'styled-components';

const Weather = (props) => {
  const Section = styled.section`
  display: inline-block;
  background-image: url("https://www.metaweather.com/static/img/weather/${props.abbr}.svg");
  width: 200px;
`

const Info = styled.p`
  margin: 10px;
  padding: 0px 8px 0px 8px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #D9D9E1;
  font-family: Avenir
`

  return (
    <div>
      {props.state && props.city && <h3><em>{props.city}, {props.state}</em></h3>}

    {props.dates.map((day, i) => {
      return (
        <Section key={i}>
          {day && <Info>{day}</Info>}
          {props.temps && <Info>{props.temps[i]}°</Info>}
          {props.states && <Info>{props.states[i]}</Info>}
      </Section>
      )
    })}

    </div>
  )
}

export default Weather;