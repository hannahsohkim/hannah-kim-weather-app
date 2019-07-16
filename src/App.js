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
    dates: [],
    temps: [],
    states: [],
    codes: [],
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
        let temps = [];
        let codes = [];
        let states = [];
        let dates = [];

        res.data.consolidated_weather.forEach((day) => {
          temps.push(Math.round(day.the_temp));
          codes.push(day.weather_state_abbr)
          states.push(day.weather_state_name)
          let date = new Date(day.applicable_date).toUTCString().slice(5, 11);
          date = date.split(' ').reverse().join(' ');
          dates.push(date)
        });

        dates.length = temps.length = codes.length = states.length = 5;
        // temps.length = 3;
        // codes.length = 3;
        // states.length = 3;

        let city = res.data.title;
        let state = res.data.parent.title;

        this.setState({
          city: city,
          state: state,
          temps: temps,
          codes: codes,
          states: states,
          dates: dates
        })
      })
  }

  convertToF = (degree) => (Math.round(degree * 9/5 + 32));

  convertToC = (degree) => (Math.round((degree - 32) * 5/9));

  changeTemps = (temps) => {
    this.setState({
      temps: temps,
      type: !this.state.type
    });
  };

  handleClick = () => {
    const {type, temps } = this.state;
    const {changeTemps, convertToC, convertToF } = this;

    if (type) {
      changeTemps(temps.map(temp => convertToF(temp)))
    } else {
      changeTemps(temps.map(temp => convertToC(temp)))
    }
  }

  render() {
    const { type, city, state, dates, codes, states, temps, highs, lows} = this.state;
    const {getWeather, handleClick } = this;

    return (
      <Wrapper>
        <Header />
        <Form getWeather={getWeather}/>
        <Weather
          city={city}
          state={state}
          dates={dates}
          highs={highs}
          lows={lows}
          temps={temps}
          codes={codes}
          states={states}
        />
        <Button onClick={handleClick}> Change to {type ? ('Fahrenheit ') : ('Celsius ')}</Button>
      </Wrapper>
    )
  }
}

export default App;
