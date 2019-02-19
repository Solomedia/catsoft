import React from 'react';
import Main from 'layouts/main';
import { Container } from 'utils/ui';
import { ProductDetail, ProductAbout, Breadcrumb, ProductDescription } from 'components';
import { default as ProductInt } from 'lib/models/product';
import mockData from 'static/mockdata.json';

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
      </Main>
    );
  }
}

export default Products;
