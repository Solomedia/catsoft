import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { Container } from 'lib/ui';
import { PlaceOrderForm } from 'components';
import { theme } from 'lib/theme';
import defaultPage from 'hoc/defaultPage';

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
}

class Checkout extends React.Component<Props, State> {
  public render() {
    return (
      <Box bg={whisper}>
        <Container>
          <PlaceOrderForm />
        </Container>
      </Box>
    );
  }
}

export default defaultPage(Checkout);
