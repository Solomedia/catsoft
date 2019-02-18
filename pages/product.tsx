import React from 'react';
import Main from 'layouts/main';
import { Container } from 'utils/ui';
import { ProductDetail } from 'components';
import { default as ProductInt } from 'lib/models/product';

interface State {
  productData: ProductInt | null;
}

class Products extends React.Component<{}, State> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer', 'header']
    };
  }

  public state = {
    productData: null
  };

  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        productData: {
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
        }
      });
    }, 1000);
  }

  public render() {
    return (
      <Main title="Product">
        <Container>
          <ProductDetail data={this.state.productData} />
        </Container>
      </Main>
    );
  }
}

export default Products;
