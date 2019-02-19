import React from 'react';
import { Box } from '@rebass/grid/emotion';
import styled, { breakpoints } from 'lib/theme';
import ServicesSlider from './ServicesSlider';

class WhyCatsoft extends React.Component {

  public render() {
    return (
        <Box mb={140}>
            <Title>Why Buy At Catsoft?</Title>
            <ServicesSlider />
        </Box>
    );
  }
}

const Title = styled.h1`
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;
  text-align: center;  
  text-transform: uppercase;
  margin-top: 13px;
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 32px;
    line-height: 39px;
    margin-top: 80px;
  }
`;

export default WhyCatsoft;
