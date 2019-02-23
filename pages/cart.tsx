import React from 'react';
import Main from 'layouts/main';
import { Container, Text } from 'lib/ui';
import { CartList, SuggestProductsList, CartTotal } from 'components';
import mockData from 'static/mockdata.json';
import { css } from '@emotion/core';
import { breakpoints } from 'lib/theme';
import { Box } from '@rebass/grid/emotion';
import { CartContext, CartContextInt } from 'contexts/CartContext';

interface State {
  cartContext: CartContextInt;
}

class Cart extends React.Component<{}, State> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer', 'header']
    };
  }

  private handleUpdateCartContext = (itemPrice: any, isAdding: boolean) =>
    this.setState(prevState => {
      if (!isAdding) {
        return {
          cartContext: {
            ...this.state.cartContext,
            total: Number(prevState.cartContext.total) - Number(itemPrice),
            quantity: Number(prevState.cartContext.quantity) - 1
          }
        };
      } else {
        return {
          cartContext: {
            ...this.state.cartContext,
            total: Number(prevState.cartContext.total) + Number(itemPrice),
            quantity: Number(prevState.cartContext.quantity) + 1
          }
        };
      }
    });

  public state = {
    cartContext: {
      total: '',
      quantity: '',
      updateCartContext: this.handleUpdateCartContext
    }
  };

  public componentDidMount() {
    this.setState({
      cartContext: {
        ...this.state.cartContext,
        total: mockData.carts_mine.items_count,
        quantity: mockData.carts_mine.items_qty
      }
    });
  }

  public render() {
    const { cartContext } = this.state;

    return (
      <Main title="Cart">
        <CartContext.Provider value={cartContext}>
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
              <SuggestProductsList data={mockData.suggest_products_list} />
            </Box>
            <CartTotal data={cartContext} />
          </Container>
        </CartContext.Provider>
      </Main>
    );
  }
}

export default Cart;
