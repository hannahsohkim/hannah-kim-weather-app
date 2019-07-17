import React from 'react';
import styled from 'styled-components';

const Weather = (props) => {

  const Section = styled.section`
  display: inline-block;
  width: 130px;
  padding: 20px 5px 20px 5px;
  margin: 15px;
  background-color: rgba(255,255,255, 0.65);
  border-radius: 4px;
  border: 1px solid #D9D9E1;
  font-family: Avenir;
`

  const Location = styled.h3`
    color: white;
    background-color: rgba(211, 211, 211, .7);
    padding: 5px;
    margin: 20px auto;
    border-radius: 5px;
    width: 40%;
    font-style: italic;
  `

  const { state, city, dates, temps, states } = props;

  return (
    <div>
      {state && city && <Location>{city}, {state}</Location>}
      {dates.map((day, i) => {
        return (
          <Section key={i}>
            {day && <div>{day}</div>}
            {temps && <div style={{fontSize: "40px"}}>{temps[i]}°</div>}
            {states && <div>{states[i]}</div>}
          </Section>
        )
      })}
    </div>
  )
}

export default Weather;