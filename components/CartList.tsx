import { CartItem } from './';
import { Box } from '@rebass/grid/emotion';

interface Props {
  data: any[];
  currency: string;
}

const CartList: React.SFC<Props> = ({ data: cartItems, currency }) => (
  <Box mt={10}>
    {cartItems.map(item => (
      <CartItem key={item.item_id} data={item} currency={currency} />
    ))}
  </Box>
);

export default CartList;
