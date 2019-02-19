import React from 'react';
import Main from 'layouts/main';
import { Container } from 'utils/ui';
import { ProductDetail, ProductDescription } from 'components';
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
          description:
            ' <ul>\r\n<li>Installation guarantee or your money back!</li>\r\n<li>If you find an identical product cheaper than us, we’ll beat it by 5%</li>\r\n<li>24x7 call support & technical help.</li>\r\n<li>100% Genuine Software Downloads.</li>\r\n</ul>',
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
    const { productData } = this.state;
    return (
      <Main title="Product">
        <Container>
          <ProductDetail data={productData} />
          <ProductDescription
            mt={4}
            template={productData && productData.description}
          />
        </Container>
      </Main>
    );
  }
}

export default Products;
