import React from 'react';
import Main from 'layouts/main';
import { Container, Text } from 'lib/ui';
import { CartList, SuggestProductsList } from 'components';
import mockData from 'static/mockdata.json';
import { css } from '@emotion/core';
import { breakpoints } from 'lib/theme';
import { Box } from '@rebass/grid/emotion';

class Cart extends React.Component<{}> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer', 'header']
    };
  }

  public render() {
    return (
      <Main title="Cart">
        <Container>
          <Text mt={6} fontSize={7} weight={300}>
            My Cart
          </Text>
          <CartList
            mt={[1, 5]}
            currency={mockData.carts_mine.currency.global_currency_code}
            data={mockData.carts_mine.items}
          />
          <Box
            css={css`
              @media (max-width: ${breakpoints['sm']}) {
                display: none;
              }
            `}
          >
            <SuggestProductsList
              data={mockData.suggest_products_list}
              handleAddProduct={target => console.log(target.checked)}
            />
          </Box>
        </Container>
      </Main>
    );
  }
}

export default Cart;
