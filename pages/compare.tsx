import React from 'react';
// import { Box } from '@rebass/grid/emotion';
import { Container } from 'lib/ui';
import { Breadcrumb, ProductCompare } from 'components';
import { default as ProductInt } from 'lib/models/product';
import mockData from 'static/mockdata.json';
import defaultPage from 'hoc/defaultPage';

// import { theme } from 'lib/theme';

// const {
//   colors: { containerBg2, whisper }
// } = theme;

interface State {
  productData: ProductInt | null;
}

class Compare extends React.Component<{}, State> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer', 'header']
    };
  }

  public state = {
    productData: null
  };

  public componentDidMount() {
    // TODO: Fetch data from api
    setTimeout(() => this.setState({ productData: mockData.product }), 300);
  }

  private createBreadcrumbRoutes() {
    const { productData } = this.state;
    return (
      productData && [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Compare',
          path: '/'
        },
        {
          name: `${productData.name}`,
          path: '#'
        }
      ]
    );
  }

  public render() {
    // const { productData } = this.state;

    return (
      <Container>
        <Breadcrumb mt={3} routes={this.createBreadcrumbRoutes()} />
        <ProductCompare categoryToCompare={{ name: 'Microsoft Office' }} />
      </Container>
    );
  }
}

export default defaultPage(Compare);
