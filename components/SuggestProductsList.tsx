import { Box } from '@rebass/grid/emotion';
import { AddProduct } from './';

interface Props {
  handleAddProduct: (target: HTMLInputElement) => any;
}

const SuggestProductsList: React.SFC<Props> = ({ handleAddProduct }) => (
  <Box>
    Any suggestion bro
    <AddProduct handleAddProduct={({ target }) => handleAddProduct(target)} />
  </Box>
);

export default SuggestProductsList;
