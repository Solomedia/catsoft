import React from 'react';
import Main from 'layouts/main';
import { Container, Text } from 'lib/ui';
import { CartList } from 'components';
import mockData from 'static/mockdata.json';

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
        </Container>
      </Main>
    );
  }
}

export default Cart;
