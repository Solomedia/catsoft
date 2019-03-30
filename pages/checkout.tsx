import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { Container, Row, Col } from 'lib/ui';
import { PlaceOrderForm, ApplyCodeForm, CartTotal } from 'components';
import { theme } from 'lib/theme';
import defaultPage from 'hoc/defaultPage';
import { getGuestCartPaymentInformation } from 'lib/services/cartsService';
import { withCartContext } from 'contexts/CartContext';

const {
  colors: { whisper }
} = theme;

interface State {
  guestCartId: string;
}

interface CategoriesData {
  children_data: any[];
}

interface PageProps {
  product: any;
}

interface Props {
  pageProps: PageProps;
  categoriesData: CategoriesData;
  routeQuery;
  context;
}

class Checkout extends React.Component<Props, State> {
  public async componentDidMount() {
    const cartPaymentInfo = await getGuestCartPaymentInformation(
      this.props.routeQuery.id
    );

    if (!cartPaymentInfo.totals) return {};
    this.props.context.initCartContext(
      cartPaymentInfo.totals.subtotal,
      cartPaymentInfo.totals.grand_total,
      cartPaymentInfo.totals.items_qty
    );

    return {
      cartPaymentInfo
    };
  }

  public applyCodeHandler = (promoCode: string) => console.log(promoCode);

  public render() {
    return (
      <Box>
        <Box pb="72px" bg={whisper}>
          <Container>
            <PlaceOrderForm />
          </Container>
        </Box>
        <Container>
          <Row mt="105px" px={[0, '80px']} justifyContent="space-between">
            <Col width={[1, '587px']}>
              <ApplyCodeForm applyCodeHandler={this.applyCodeHandler} />
            </Col>
            <Col mt={[5, 0]} width={[1, 'auto']}>
              <CartTotal />
            </Col>
          </Row>
        </Container>
      </Box>
    );
  }
}

export default defaultPage(withCartContext(Checkout));
