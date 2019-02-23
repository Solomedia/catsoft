import { CartItem } from './';
import { Box, Flex } from '@rebass/grid/emotion';
import { Col, Text } from 'lib/ui';
import { breakpoints } from 'lib/theme';
import { css } from '@emotion/core';

interface Props {
  data: any[];
  currency: string;
  mt?: number | number[];
}

const CartList: React.SFC<Props> = ({ data: cartItems, currency, mt }) => (
  <Box mt={mt}>
    <Flex
      css={css`
        @media (max-width: ${breakpoints['sm']}) {
          display: none;
        }
      `}
    >
      <Text width="50%">Product</Text>
      <Flex width="50%">
        <Col width={1 / 3}>Quantity</Col>
        <Col width={1 / 3}>Price</Col>
        <Col width={1 / 3}>Total</Col>
      </Flex>
    </Flex>
    {cartItems.map(item => (
      <CartItem key={item.item_id} data={item} currency={currency} mt={2} />
    ))}
  </Box>
);

export default CartList;
