import React from 'react';
import Main from 'layouts/main';
import { Container } from 'utils/ui';
import { ProductDetail } from 'components';

const productData = {
  name: 'Microsoft Access 2010',
  sku: 'access2010',
  image: 'https://via.placeholder.com/333x366',
  manufacturer: 'microsoft',
  special_price: 5,
  price: {
    regularPrice: {
      amount: {
        value: 109.99,
        currency: 'USD'
      }
    }
  }
};

class Products extends React.Component<{}> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer', 'header']
    };
  }

  public render() {
    return (
      <Main title="Product">
        <Container>
          <ProductDetail data={productData} />
        </Container>
      </Main>
    );
  }
}

export default Products;
