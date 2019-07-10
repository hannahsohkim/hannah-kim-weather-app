import React from 'react';
import styled from 'styled-components';

const SubHeader = styled.p`
  font-family: Avenir
`;

const Header = () => {
  return (
    <div>
      <h1>United States Weather App</h1>
      <SubHeader>Enter a city anywhere in the US to find out today's weather conditions!</SubHeader>
    </div>
  )
}

export default Header;