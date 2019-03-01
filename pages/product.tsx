import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { Container } from 'lib/ui';
import {
  ProductDetail,
  ProductAbout,
  Breadcrumb,
  ProductDescription,
  IncludedProductsList,
  Reviews,
  ProductCompareEditions
} from 'components';
import ProductSummary from 'components/ProductSummary';
import { default as ProductInt } from 'lib/models/product';
import mockData from 'static/mockdata.json';
import { theme } from 'lib/theme';
import defaultPage from 'hoc/defaultPage';

const {
  colors: { containerBg2, whisper }
} = theme;

interface State {
  productData: ProductInt | null;
}

class Product extends React.Component<{}, State> {
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
      <>
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
          <ProductCompareEditions />
        </Container>
        <Box bg={containerBg2} pt={[3, 7]} pb={[4, 10]} mt={5}>
          <Container>
            <Reviews />
          </Container>
        </Box>
      </>
    );
  }
}

export default defaultPage(Product);
