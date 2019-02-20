import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import styled from 'lib/theme';

interface ProductIncluded {
  name: string;
  image: string;
  text: string;
}

interface Props {
  mt: number | number[] | string | string[];
  data: ProductIncluded;
}

const VerticalCard: React.SFC<Props> = ({ mt, data: product }) => (
  <React.Fragment>
    {product && (
      <Flex flexDirection={['column', 'row']} mt={mt} mx={'-15px'}>
        <Box px={2} width={[1, '28%']}>
          <img src={product.image} />
        </Box>
        <Box my={[3, 0]} px={2} width={[1, '72%']}>
          <Title>{product.name}</Title>
          <Text>{product.text}</Text>
        </Box>
      </Flex>
    )}
  </React.Fragment>
);

const Title = styled.h3`
  label: Title;
  color: #000032;
  font-size: 28px;
  font-weight: 300;
  line-height: 32px;
`;

const Text = styled.p`
  font-weight: 500;
  line-height: 22px;
`;

export default VerticalCard;
