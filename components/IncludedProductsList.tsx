import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { VerticalCard } from './';
import styled from 'lib/theme';
// TODO: review ProductIncluded data with BE
interface ProductIncluded {
  name: string;
  image: string;
  text: string;
}

interface Props {
  data: ProductIncluded[];
  mt?: number | number[];
}

const IncludedProductsList: React.SFC<Props> = ({ mt, data: products }) => (
  <Box mt={mt}>
    <Title>Included in this deal:</Title>
    {products && (
      <Box>
        {products.map((product, i) => (
          <VerticalCard key={i} mt={4} data={product} />
        ))}
      </Box>
    )}
  </Box>
);

const Title = styled.h3`
  font-size: 32px;
  font-weight: 300;
  line-height: 39px;
`;

export default IncludedProductsList;
