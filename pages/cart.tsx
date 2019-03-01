import React from 'react';
import { Container, Text } from 'lib/ui';
import {
  CartList,
  SuggestProductsList,
  CartTotal,
  Reviews,
  SubscribeForm
} from 'components';
import mockData from 'static/mockdata.json';
import { css } from '@emotion/core';
import { breakpoints, colors } from 'lib/theme';
import { Box } from '@rebass/grid/emotion';
import { CartContext, CartContextInt } from 'contexts/CartContext';
import defaultPage from 'hoc/defaultPage';

const { containerBg2 } = colors;

interface State {
  cartContext: CartContextInt;
}

class Cart extends React.Component<{}, State> {
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
      <>
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
        <Box bg={containerBg2} pt={[3, 7]} pb={[4, 10]} mt={5}>
          <Container>
            <Reviews />
          </Container>
        </Box>
        <Box
          css={css`
            label: SubscribeFormWraper;
            @media (max-width: ${breakpoints['sm']}) {
              display: none;
            }
          `}
        >
          <SubscribeForm />
        </Box>
      </>
    );
  }
}

export default defaultPage(Cart);
