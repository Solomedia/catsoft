import { Box } from '@rebass/grid/emotion';
import { withCartContext } from 'contexts/CartContext';
import { Text } from 'lib/ui';

const CartTotal = ({ context }) => (
  <Box>
    <Text weight="300" fontSize={8}>
      Cart Total
    </Text>
    <Text mt={4} weight="bold" fontSize="38px" lineHeight="54px">
      ${context.total} USD
    </Text>
  </Box>
);

export default withCartContext(CartTotal);
