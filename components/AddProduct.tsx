import { Flex, Box } from '@rebass/grid/emotion';
import { colors } from 'lib/theme';
import { Text } from 'lib/ui';
import { css } from '@emotion/core';
import { default as ProductInt } from 'lib/models/product';
import { withCartContext } from 'contexts/CartContext';

const { textColor2 } = colors;

interface Props {
  data: ProductInt;
  mt?: number | number[];
  context: any;
}

const AddProduct: React.SFC<Props> = ({ data: product, mt, context }) => (
  <Flex mt={mt}>
    <input
      name="addProduct"
      type="checkbox"
      onChange={e => context.updateCartContext(product.price, e.target.checked)}
    />
    <Box ml={2}>
      <Text weight="600">
        <span
          css={css`
            font-weight: 300;
          `}
        >
          Add
        </span>
        {product.name}
      </Text>
      <Text mt={0} color={textColor2}>
        {product.meta_description}
      </Text>
      <Text mt={1} weight="300" fontSize={7}>
        ${product.price} {product.currency}
      </Text>
    </Box>
  </Flex>
);

export default withCartContext(AddProduct);
