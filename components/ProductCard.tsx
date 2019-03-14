import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import { Text, Button } from 'lib/ui';
import { Stars } from './';
import { css } from '@emotion/core';
import Link from 'next/link';
import { breakpoints } from 'lib/theme';

interface Props {
  data: any;
  width?: number | number[] | string | string[];
}

const ProductCard: React.SFC<Props> = ({ data: product, width }) => {
  if (!product) return <div />;

  return (
    <Flex
      px={[2, 4]}
      py={[3, '0px']}
      width={width || '282px'}
      flexDirection={['row', 'column']}
      justifyContent={['center', 'unset']}
      css={css`
        @media (max-width: ${breakpoints['sm']}) {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          border: 1px solid #e8e8e8;
          box-shadow: 0 5px 7px 0 rgba(136, 136, 136, 0.1);
        }
      `}
    >
      <Box px={['0px', 7]}>
        <img
          css={css`
            width: 100%;
            @media (max-width: ${breakpoints['sm']}) {
              max-width: 135px;
            }
          `}
          src={product.image || 'https://via.placeholder.com/202x222'}
        />
      </Box>
      <Flex justifyContent="flex-start" flexDirection="column" ml={[3, '0px']}>
        <Text weight="500" mt={['0px', 2]}>
          {product.name}
        </Text>
        <Stars mt={['0px', 0]} stars={5} />
        <Text mt={['0px', 2]} weight="600" fontSize={7}>
          $ {product.price}
        </Text>
        <Box mt={'auto'}>
          <Link href={`/product?sku=${product.sku}`}>
            <Button py={['0px', '14px']} mt={['0px', 2]} width={1}>
              buy now
            </Button>
          </Link>
          <Link href="#">
            <Text
              mt={[0, 1]}
              width={1}
              align="center"
              fontSize="10px"
              color="#7467ED"
              display="block"
              as="a"
            >
              compare
            </Text>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
