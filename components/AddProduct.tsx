import { Flex, Box } from '@rebass/grid/emotion';
import { colors } from 'lib/theme';
import { Text } from 'lib/ui';
import { css } from '@emotion/core';

const { textColor2 } = colors;

interface Props {
  handleAddProduct: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const AddProduct: React.SFC<Props> = ({ handleAddProduct }) => (
  <Flex mt={7}>
    <input name="isGoing" type="checkbox" onChange={e => handleAddProduct(e)} />
    <Box ml={2}>
      <Text weight="600">
        <span
          css={css`
            font-weight: 300;
          `}
        >
          Add
        </span>
        Anti-virus
      </Text>
      <Text color={textColor2}>Trend Micro Maximum Security 1 Year 3 Pc</Text>
      <Text weight="300" fontSize={7}>
        $24.99 USD
      </Text>
    </Box>
  </Flex>
);

export default AddProduct;
