import React from 'react';
import { Row, Col } from 'lib/ui';
import Select from './Select';
import Title from './Title';
import data from 'static/mockdata.json';

const { compareCategories } = data;

interface Product {
  id: number;
  name: string;
  price: number;
  stars: number;
  license_use: string;
  license_type: string;
  included_products: string[];
}

interface Props {
  categoryName: string;
  products: Product[];
}
interface State {
  activeProducts?: Product[];
}

class ProductCompare extends React.Component<Props, State> {
  public state = {
    activeProducts: []
  };

  private onSelectChange = (selectPosition: number, option: string) => {
    const { products: productsToCompare, categoryName } = this.props;
    const { activeProducts } = this.state;

    activeProducts[selectPosition] = productsToCompare.find(({ name }) =>
      name.includes(option)
    );

    if (categoryName === compareCategories[0].name) {
      const selectedProduct = activeProducts[selectPosition];
      compareCategories[0].products.items.forEach(
        ({ sku, included_products, license_use }) => {
          if (selectedProduct.sku === sku) {
            selectedProduct.included_products = included_products;
            selectedProduct.license_use = license_use;
            activeProducts[selectPosition] = selectedProduct;
          }
        }
      );
    }

    this.setState({ activeProducts });
  };

  public render() {
    const { categoryName, products: productsToCompare } = this.props;
    const { activeProducts } = this.state;
    const options = productsToCompare.reduce((result, { name }) => {
      const productExist = activeProducts.some(prod => prod.name === name);
      if (!productExist)
        result.push(name.replace(/Microsoft |Office |Windows /g, ''));
      return result;
    }, []);

    return (
      <>
        <Title categoryName={categoryName} />
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
              index >= 0 &&
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
