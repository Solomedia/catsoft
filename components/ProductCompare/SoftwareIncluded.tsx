import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import styled from 'lib/theme';

interface Props {
  allApps: string[];
  products: string[];
}

const SoftwareIncluded: React.SFC<Props> = ({ allApps, products }) => (
  <Flex flexWrap="wrap">
    {allApps.map((item, index) => (
      <Box
        css={css`
          position: relative;
        `}
        mr={4}
        mb={4}
        key={index}
      >
        {!products.includes(item) && <Cover />}
        <img src={'https://via.placeholder.com/65x63'} />
      </Box>
    ))}
  </Flex>
);

const Cover = styled(Box)`
  top: 0;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
`;

export default SoftwareIncluded;
