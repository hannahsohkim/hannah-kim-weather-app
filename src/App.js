import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import Weather from './components/Weather';
import Header from './components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Helvetica;
  font-size: 20px;
  text-align: center;
`

const Button = styled.button `
  font-size: 14px;
  border-radius: 4px;
  border: 2px solid #7979E1;
  margin: 10px;
  padding: 6px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 2px solid #3939D9
  }
  &:focus {
    outline: none !important
  }
`

class App extends React.Component {
  state = {
    city: '',
    state: '',
    applicable_date: '',
    min_temp: '',
    max_temp: '',
    the_temp: '',
    weather_state_abbr: '',
    weather_state_name: '',
    type: true
  }

  getWeather = (e, city) => {
    e.preventDefault();

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const locationUrl =  `https://www.metaweather.com/api/location/search/?query=${city}`;

    axios.get(proxyUrl + locationUrl)
      .then(res => {
        const id = res.data[0].woeid;
        const weatherUrl = `https://www.metaweather.com/api/location/${id}/`;
        return axios.get(proxyUrl + weatherUrl)
      })
      .then(res => {
        let { applicable_date, max_temp, min_temp, the_temp, weather_state_name, weather_state_abbr } = res.data.consolidated_weather[0];
        let city = res.data.title;
        let state = res.data.parent.title;

        this.setState({
          city: city,
          state: state,
          max_temp: max_temp.toFixed(1),
          min_temp: min_temp.toFixed(1),
          the_temp: the_temp.toFixed(1),
          weather_state_name: weather_state_name.toLowerCase(),
          weather_state_abbr,
          applicable_date
        })
      })
  }

  convertToF = (degree) => (degree * 9/5 + 32).toFixed(1);

  convertToC = (degree) => ((degree - 32) * 5/9).toFixed(1);

  changeTemps = (temp, max, min) => {
    this.setState({
      the_temp: temp,
      max_temp: max,
      min_temp: min,
      type: !this.state.type
    });
  };

  handleClick = () => {
    const {type, max_temp, min_temp, the_temp } = this.state;
    const {changeTemps, convertToC, convertToF } = this;

    if (type) {
      changeTemps(convertToF(the_temp), convertToF(max_temp), convertToF(min_temp))
    } else {
      changeTemps(convertToC(the_temp), convertToC(max_temp), convertToC(min_temp))
    }
  }

  render() {
    const { type, city, state, applicable_date, max_temp, min_temp, the_temp, weather_state_abbr, weather_state_name} = this.state;
    const {getWeather, handleClick } = this;

    return (
      <Wrapper>
        <Header />
        <Form getWeather={getWeather}/>
        <Weather
          city={city}
          state={state}
          date={applicable_date}
          max={max_temp}
          min={min_temp}
          temp={the_temp}
          abbr={weather_state_abbr}
          name={weather_state_name}
        />
        <Button onClick={handleClick}> Change to {type ? ('Celcius ') : ('Fahrenheit ')}</Button>
      </Wrapper>
    )
  }
}

export default App;
