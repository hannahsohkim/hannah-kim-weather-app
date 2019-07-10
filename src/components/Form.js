import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #7979E1;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 7px;
  width: 160px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  &:hover {
    background-color: #3939D9
  }
  &:focus {
    outline: none !important
  }
`
const Input = styled.input`
  height: 23px;
  border-radius: 4px;
  &:focus {
    outline: none !important;
    border: 3px solid #7979E1
  }
`

const Form = (props) => {
  return(
    <form onSubmit={props.getWeather}>
      <Input type="text" name="city" placeholder="City..."/>
      <Button type="submit">GET WEATHER</Button>
    </form>
  )
}

export default Form;