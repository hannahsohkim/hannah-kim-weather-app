import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
color: white;
`

const SubHeader = styled.p`
  font-family: Avenir;
  background-color: rgba(211, 211, 211, .4);
  padding: 5px 12px 5px 12px
  border-radius: 5px
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>United States Weather App</h1>
      <SubHeader>Enter a city anywhere in the US to find out today's weather conditions!</SubHeader>
    </Wrapper>
  )
}

export default Header;