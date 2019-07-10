import React from 'react';
import styled from 'styled-components';

const Weather = (props) => {

  const Section = styled.section`
  width: 100%
  height: 100%
  background-image: url("https://www.metaweather.com/static/img/weather/${props.abbr}.svg")
`

const Info = styled.p`
  display: inline-block;
  margin: 20px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #D9D9E1;
`

  return (
    <div>
      {props.name && props.city && <h3><em>You can expect {props.name} today in {props.city}, {props.state}.</em></h3>}
      <Section>
        {props.date && <Info>Date: {props.date}</Info>}
        {props.temp && <Info>Temperature: {props.temp}</Info>}
        {props.max && <Info>High: {props.max}</Info>}
        {props.min && <Info>Low: {props.min}</Info>}
    </Section>
    </div>
  )
}

export default Weather;