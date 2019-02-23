import React from 'react';
import { css } from '@emotion/core';
import { Flex, Box } from '@rebass/grid/emotion';
import { breakpoints } from 'lib/theme';

interface Props {
  data: any;
  featureList: string[];
}

const CompareEditionsTable: React.SFC<Props> = ({
  data: includedProducts,
  featureList
}) => {
  return (
    <Flex flexDirection={['column', 'row']}>
      {includedProducts.length &&
        includedProducts.map((product, i) => (
          <Flex key={product.id}>
            <Flex
              flexDirection="column"
              css={
                i &&
                css`
                  @media (min-width: ${breakpoints['md']}) {
                    display: none;
                  }
                `
              }
            >
              <Box
                css={css`
                  @media (max-width: ${breakpoints['md']}) {
                    display: none;
                  }
                `}
              >
                FEATURE
              </Box>
              <Box
                css={css`
                  @media (min-width: ${breakpoints['md']}) {
                    display: none;
                  }
                `}
              >
                {product.name.replace(/Microsoft Office |[0-9]/g, '')}
              </Box>
              {featureList.map(feature => (
                <Flex flexDirection="column" key={feature}>
                  <Box>{feature}</Box>
                </Flex>
              ))}
              <Box>License Use</Box>
              <Box>License Type</Box>
            </Flex>
            <Flex flexDirection="column">
              <Box
                css={css`
                  @media (min-width: ${breakpoints['md']}) {
                    display: none;
                  }
                `}
              >
                INCLUDED
              </Box>
              <Box
                css={css`
                  @media (max-width: ${breakpoints['md']}) {
                    display: none;
                  }
                `}
              >
                {product.name.replace(/Microsoft Office |[0-9]/g, '')}
              </Box>
              {featureList.map((feature, index) => (
                <Flex flexDirection="column" key={feature}>
                  <Box>
                    {product.included_products.length >= index ? 'yes' : 'no'}
                  </Box>
                </Flex>
              ))}
              <Box>{product.license_use}</Box>
              <Box>{product.license_type}</Box>
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};

export default CompareEditionsTable;
