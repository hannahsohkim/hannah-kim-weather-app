import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 15px;
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
  font-size: 15px;
  height: 24px;
  width: 150px;
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
    <form onSubmit={this.handleSubmit}>
      <Input
        type="text"
        placeholder="City..."
        onChange={this.handleChange}
        value={this.state.city}
      />
      <Button>
        <strong>GET WEATHER</strong>
      </Button>
    </form>
    )
  }
}



export default Form;