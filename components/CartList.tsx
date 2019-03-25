import { NextFunctionComponent } from 'next';
import { CartItem } from './';
import { Box, Flex } from '@rebass/grid/emotion';
import { Col, Text } from 'lib/ui';
import { breakpoints } from 'lib/theme';
import { css } from '@emotion/core';
import { withCartContext } from 'contexts/CartContext';

interface Props {
  data: any[];
  currency: string;
  mt?: number | number[];
  context?: any;
  updateCartData: () => any;
}

const CartList: NextFunctionComponent<Props> = ({
  data: cartItems,
  currency,
  mt,
  context,
  updateCartData
}) => (
  <Box mt={mt}>
    <h1>{context.name}</h1>
    <Flex
      css={css`
        @media (max-width: ${breakpoints['sm']}) {
          display: none;
        }
      `}
    >
      <Text width={1 / 2}>Product</Text>
      <Flex width={1 / 2}>
        <Col width={1 / 3}>Quantity</Col>
        <Col width={1 / 3}>Price</Col>
        <Col width={1 / 3}>Total</Col>
      </Flex>
    </Flex>
    {cartItems.map(item => (
      <CartItem
        key={item.item_id}
        updateCartData={updateCartData}
        data={item}
        currency={currency}
        mt={2}
      />
    ))}
  </Box>
);

export default withCartContext(CartList);
