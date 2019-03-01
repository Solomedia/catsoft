import React from 'react';
import { Container } from 'lib/ui';
import { Breadcrumb, ProductCompare } from 'components';
import defaultPage from 'hoc/defaultPage';
import mockData from 'static/mockdata.json';

interface Product {
  id: number;
  name: string;
  price: number;
  stars: number;
  license_use: string;
  license_type: string;
  included_products: string[];
}

interface Products {
  items: Product[];
}

interface Category {
  id: number;
  name: string;
  Products: Products;
}

interface Props {
  categoryToCompareId: number;
}

interface State {
  compareCategoryData: Category;
}

class Compare extends React.Component<Props, State> {
  public static defaultProps = {
    categoryToCompareId: 3
  };

  public state = {
    compareCategoryData: null
  };

  public componentDidMount() {
    // TODO: Fetch data from api
    const { categoryToCompareId: id } = this.props;
    const compareCategoryData = mockData.compareCategories.find(
      item => item.id === id
    );
    setTimeout(() => this.setState({ compareCategoryData }), 300);
  }

  private createBreadcrumbRoutes() {
    const { compareCategoryData } = this.state;
    return (
      compareCategoryData && [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Compare',
          path: '/'
        },
        {
          name: `${compareCategoryData.name}`,
          path: '#'
        }
      ]
    );
  }

  public render() {
    const { compareCategoryData } = this.state;

    return (
      <>
        <Container>
          <Breadcrumb mt={3} routes={this.createBreadcrumbRoutes()} />
          <ProductCompare categoryToCompare={compareCategoryData} />
        </Container>
      </>
    );
  }
}

export default defaultPage(Compare, 'Compare');
