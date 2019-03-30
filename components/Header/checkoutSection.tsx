import { Flex } from '@rebass/grid/emotion';
import { Text, Button } from 'lib/ui';

const CheckoutSection = ({ subTotal }) => (
  <Flex alignItems="center" justifyContent="flex-end">
    <Text color="#fff" weight="500">
      Cart Subtotal:
    </Text>
    <Text ml={1} fontSize="26px" color="#fff" weight="bold">
      $ {subTotal}
    </Text>
    <Button
      href="#placeOrderForm"
      backgroundColor="transparent"
      color="#fff"
      borderColor="#fff"
      borderWidth="1px"
      ml={2}
      maxWidth="169px"
      revert
    >
      PLACE YOUR ORDER
    </Button>
  </Flex>
);

export default CheckoutSection;
