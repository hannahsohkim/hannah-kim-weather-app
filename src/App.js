import React from 'react';
import axios from 'axios';
import Form from './components/Form';
import Weather from './components/Weather';
import Header from './components/Header';
import APIKEY from './config.js';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

class App extends React.Component {
  state = {
    city: '',
    date: '',
    min: '',
    max: '',
    temp: '',
    country: '',
    description: ''
  }

  getWeather = (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const locationUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`

    axios.get(proxyUrl + locationUrl)
      .then(res => {
        this.setState({
          temp: res.data.main.temp,
          min: res.data.main.temp_min,
          max: res.data.main.temp_max,
          city: res.data.name,
          country: res.data.sys.country,
          description: res.data.weather[0].description.toLowerCase(),
          date: res.headers.date.slice(0, 16)
      })
    })
  }

  render() {
    let { date, max, min, city, temp, description, country } = this.state;

    return (
      <Container maxWidth="xs">
        <Grid container justify='center'>
        <Header />
        <Form getWeather={this.getWeather}/>
        <Weather
          city={city}
          country={country}
          temp={temp}
          description={description}
          date={date}
          max={max}
          min={min}
          />
          </Grid>
      </Container>
    )
  }
}

export default App;




// class App extends React.Component {
//   state = {
//     city: '',
//     applicable_date: '',
//     min_temp: '',
//     max_temp: '',
//     the_temp: '',
//     weather_state_abbr: '',
//     weather_state_name: '',
//   }

//   getWeather = (e) => {
//     e.preventDefault();

//     const query = e.target.elements.city.value;
//     const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//     const locationUrl =  `https://www.metaweather.com/api/location/search/?query=${query}`;

//     axios.get(proxyUrl + locationUrl)
//       .then(res => {
//         const id = res.data[0].woeid;
//         const weatherUrl = `https://www.metaweather.com/api/location/${id}/`;

//         return axios.get(proxyUrl + weatherUrl)
//       })
//       .then(res => {
//         console.log(res.data)
//         let { title, applicable_date, max_temp, min_temp, the_temp, weather_state_name, weather_state_abbr } = res.data.consolidated_weather[0];

//         this.setState({ title, applicable_date, max_temp, min_temp, the_temp, weather_state_name, weather_state_abbr })
//         })
//   }

//   render() {
//     let { title, applicable_date, max_temp, min_temp, the_temp, weather_state_abbr, weather_state_name} = this.state;

//     return (
//       <div>
//         <Header />
//         <Form getWeather={this.getWeather}/>
//         <Weather
//           city={title}
//           date={applicable_date}
//           max={max_temp}
//           min={min_temp}
//           temp={the_temp}
//           abbr={weather_state_abbr}
//           name={weather_state_name}
//           />
//       </div>
//     )
//   }
// }

// export default App;
