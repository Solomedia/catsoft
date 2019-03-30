import React from 'react';
import { Container, Text } from 'lib/ui';
import {
  CartList,
  SuggestProductsList,
  CartSubtotal,
  Reviews,
  SubscribeForm
} from 'components';
import mockData from 'static/mockdata.json';
import { css } from '@emotion/core';
import { breakpoints, colors } from 'lib/theme';
import { Box } from '@rebass/grid/emotion';
import defaultPage from 'hoc/defaultPage';
import {
  getGuestCartPaymentInformation,
  getGuestCart
} from 'lib/services/cartsService';
import { withCartContext } from 'contexts/CartContext';

const { containerBg2 } = colors;

interface PageProps {
  cartData: any;
}

interface Props {
  pageProps: PageProps;
  routeQuery: any;
  context: any;
}

class Cart extends React.Component<Props, any> {
  public async componentDidMount() {
    this.updateCartData();
  }

  private updateCartData = async () => {
    const cartPaymentInfo = await getGuestCartPaymentInformation(
      this.props.routeQuery.id
    );

    if (!cartPaymentInfo.totals) return false;

    this.props.context.initCartContext(
      cartPaymentInfo.totals.subtotal,
      cartPaymentInfo.totals.grand_total,
      cartPaymentInfo.totals.items_qty
    );

    const cartData = await getGuestCart(this.props.routeQuery.id);

    this.setState({
      cartData
    });
  };

  public state = {
    cartData: null
  };

  public render() {
    const { cartData } = this.state;
    const { routeQuery } = this.props;

    return (
      <>
        <Container>
          <Text mt={6} fontSize={7} weight={300}>
            My Cart
          </Text>
          {cartData && (
            <CartList
              mt={[1, 5]}
              currency={cartData.base_currency_code || 'USD'}
              data={cartData.items}
              updateCartData={() => this.updateCartData()}
            />
          )}

          <Box
            css={css`
              @media (max-width: ${breakpoints['sm']}) {
                display: none;
              }
            `}
          >
            <SuggestProductsList data={mockData.suggest_products_list} />
          </Box>
          <CartSubtotal cartId={routeQuery.id} />
        </Container>

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

export default defaultPage(withCartContext(Cart));
