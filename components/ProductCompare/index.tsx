import React from 'react';
import { Row, Col } from 'lib/ui';
import Select from './Select';
import Title from './Title';
import Details from './Details';
import SectionTitle from './SectionTitle';
import SoftwareIncluded from './SoftwareIncluded';
import data from 'static/mockdata.json';
import License from './License';

const { compareCategories, genericText, standarOfficeApps } = data;

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
        <Row justifyContent="center" mt={9}>
          {activeProducts.map(
            ({ name }, index) =>
              index >= 0 &&
              index < 4 && (
                <Col key={index} width={[1 / 4]}>
                  <Details
                    productTitle={name}
                    description={genericText.replace(/<name>/g, name)}
                  />
                </Col>
              )
          )}
          {!!activeProducts.length && activeProducts.length < 4 && (
            <Col width={[1 / 4]} />
          )}
        </Row>
        {categoryName === compareCategories[0].name && (
          <>
            <SectionTitle>Softwares included</SectionTitle>
            <Row justifyContent="center" mt={4}>
              {activeProducts.map(
                ({ included_products }, index) =>
                  index >= 0 &&
                  index < 4 &&
                  (included_products ? (
                    <Col key={index} width={[1 / 4]}>
                      <SoftwareIncluded
                        allApps={standarOfficeApps}
                        products={included_products}
                      />
                    </Col>
                  ) : (
                    <Col key={index} width={[1 / 4]} />
                  ))
              )}
              {!!activeProducts.length && activeProducts.length < 4 && (
                <Col width={[1 / 4]} />
              )}
            </Row>
          </>
        )}
        {categoryName === compareCategories[0].name && (
          <>
            <SectionTitle>License and Instalations</SectionTitle>
            <Row justifyContent="center" mt={4}>
              {activeProducts.map(
                ({ license_use }, index) =>
                  index >= 0 &&
                  index < 4 &&
                  (license_use ? (
                    <Col key={index} width={[1 / 4]}>
                      <License license={license_use} />
                    </Col>
                  ) : (
                    <Col key={index} width={[1 / 4]} />
                  ))
              )}
              {!!activeProducts.length && activeProducts.length < 4 && (
                <Col width={[1 / 4]} />
              )}
            </Row>
          </>
        )}
      </>
    );
  }
}

export default ProductCompare;
