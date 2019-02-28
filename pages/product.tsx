import React from 'react';
import { Box } from '@rebass/grid/emotion';
import Main from 'layouts/main';
import { Container } from 'lib/ui';
import {
  ProductDetail,
  ProductAbout,
  Breadcrumb,
  ProductDescription,
  IncludedProductsList,
  Reviews,
  CompareTable
} from 'components';
import ProductSummary from 'components/ProductSummary';
import { default as ProductInt } from 'lib/models/product';
import mockData from 'static/mockdata.json';
import { theme } from 'lib/theme';

const {
  colors: { containerBg2, whisper }
} = theme;

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
    // TODO: Fetch data from api
    setTimeout(() => this.setState({ productData: mockData.product }), 300);
  }

  private createBreadcrumbRoutes() {
    const { productData } = this.state;
    // TODO: Review fix for product-categories data structure with BE
    const breadcrumb =
      productData &&
      productData.categories[2].breadcrumbs &&
      productData.categories[2].breadcrumbs[0];

    return (
      breadcrumb && [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: `${breadcrumb.category_name}`,
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
    const { productData } = this.state;

    return (
      <Main title="Product">
        <Container>
          <Breadcrumb mt={3} routes={this.createBreadcrumbRoutes()} />
          <ProductDetail data={productData} />
          <ProductDescription
            mt={4}
            template={productData && productData.description}
          />
          <ProductAbout />
        </Container>
        <Box bg={whisper}>
          <Container>
            <ProductSummary />
            <IncludedProductsList
              mt={[5, 11]}
              data={productData && productData.included_packages}
            />
          </Container>
        </Box>
        <Container>
          <CompareTable />
        </Container>
        <Box bg={containerBg2} pt={[3, 7]} pb={[4, 10]} mt={5}>
          <Container>
            <Reviews />
          </Container>
        </Box>
      </Main>
    );
  }
}

export default Products;
