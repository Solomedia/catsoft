import React from 'react';
import { Box } from '@rebass/grid/emotion';
import styled, { breakpoints } from 'lib/theme';

interface Props {
  image: string;
  title: string;
  description: string;
}

class Service extends React.Component<Props> {
  public render() {
    const { image, title, description } = this.props;
    return (
      <Box>
          <Image src={image} />
          <Title>{title}</Title>
          <Description>{description}</Description>
    </Box>
    );
  }
}

const Image = styled.img`
    border-radius: 100%;
    margin: 0 auto;
`;

const Title = styled.h1`
    margin-top: 10px;
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    text-align: center;
    @media (min-width: ${breakpoints['sm']}) {
        font-size: 28px;
    }
`;

const Description = styled.p`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
`;

export default Service;