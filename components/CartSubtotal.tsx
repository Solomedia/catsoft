import { Box } from '@rebass/grid/emotion';
import { Text, Button } from 'lib/ui';
import { colors } from 'lib/theme';
import { css } from '@emotion/core';
import { withCartContext } from 'contexts/CartContext';
import Router from 'next/router';

const { textColor3, textColor4 } = colors;

const CartSubtotal = ({ cartId, context: { quantity, subTotal } }) => (
  <Box
    mt={7}
    css={css`
      text-align: right;
    `}
  >
    <Text color={textColor3} weight="500">
      Total Products:
    </Text>
    <Text mt={0} weight="600" fontSize={9}>
      {quantity}
    </Text>
    <Text mt={2} color={textColor3} weight="500">
      Subtotal:
    </Text>
    <Text mt={0} weight="600" fontSize={9}>
      ${subTotal} USD
    </Text>
    <Text mt={2} fontSize={0} weight={500} color={textColor4}>
      Shipping & taxes calculated at checkout
    </Text>
    <Button
      as="button"
      maxWidth="340px"
      py={2}
      fontSize="14px"
      mt={1}
      ml="auto"
      width={['100%', '250px']}
      onClick={() => Router.push(`/checkout?id=${cartId}`)}
    >
      check out
    </Button>
  </Box>
);

export default withCartContext(CartSubtotal);
