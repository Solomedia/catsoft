import React from 'react';
import { Text, Row, Col } from 'lib/ui';
import Select from './Select';

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
  name: string;
  products: Products;
}

interface Props {
  categoryToCompare: Category;
}
interface State {
  productsToCompare: Product[];
  activeProducts?: Product[];
}

class ProductCompare extends React.Component<Props, State> {
  public state = {
    productsToCompare: [],
    activeProducts: []
  };

  private onSelectChange = (selectPosition: number, option: string) => {
    const { productsToCompare, activeProducts } = this.state;
    activeProducts[selectPosition] = productsToCompare.find(({ name }) =>
      name.includes(option)
    );
    this.setState({ activeProducts });
  };

  public componentDidUpdate() {
    const { productsToCompare } = this.state;

    if (!productsToCompare.length) {
      const { categoryToCompare } = this.props;
      const products = categoryToCompare && categoryToCompare.products;
      const items = products && products.items;
      this.setState({ productsToCompare: items });
    }
  }

  public render() {
    const { categoryToCompare } = this.props;
    const { activeProducts, productsToCompare } = this.state;
    const categoryName = categoryToCompare && categoryToCompare.name;
    const options = productsToCompare.reduce((result, { name }) => {
      const productExist = activeProducts.some(prod => prod.name === name);
      if (!productExist) result.push(name.replace(/Microsoft Office /g, ''));
      return result;
    }, []);

    return (
      <>
        <Text as="h1" mt={8} fontSize={10} weight={300} align="center">
          Compare {categoryName} Products
        </Text>
        <Text mt={3} weight={500} align="center">
          Select the softwares below that you want to compare. You can add up to
          4 softwares.
        </Text>
        <Row justifyContent="center" mt={7}>
          <Col width={[1 / 4]}>
            <Select
              options={options}
              selectPosition={0}
              onSelectChange={this.onSelectChange}
              placeholder="Add one"
            />
          </Col>
          {activeProducts.map(
            (_, index) =>
              index > -1 &&
              index < 3 && (
                <Col key={index} width={[1 / 4]}>
                  <Select
                    selectPosition={index + 1}
                    options={options}
                    onSelectChange={this.onSelectChange}
                    placeholder="Add another"
                  />
                </Col>
              )
          )}
        </Row>
      </>
    );
  }
}

export default ProductCompare;
