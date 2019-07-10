import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #7979E1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin: 5px;
  width: 160px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #3939D9
  }
  &:focus {
    outline: none !important
  }
`
const Input = styled.input`
  height: 24px;
  border-radius: 4px;
  padding-left: 5px;
  margin-right: 3px;
  &:focus {
    outline: none !important;
    border: 3px solid #7979E1
  }

`

class Form extends React.Component {
  state = {
    city: ''
  }

  handleChange = (e) => {
    this.setState({city: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getWeather(e, this.state.city);
    this.setState({city: ''})
  }

  render () {
    return(
    <form >
      <Input
        type="text"
        placeholder="City..."
        onChange={this.handleChange}
        value={this.state.city}
      />
      <Button
        onClick={this.handleSubmit}
        type="submit">
        GET WEATHER
      </Button>
    </form>
    )
  }
}



export default Form;