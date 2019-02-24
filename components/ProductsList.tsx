import { ProductCard } from './';
import { Row, Col } from 'lib/ui';

interface Props {
  mt?: number | number[];
  data: any[];
}

const ProductsList: React.SFC<Props> = ({ data: products, mt }) => (
  <Row mt={mt} flexWrap="wrap">
    {products &&
      products.map((product, i) => (
        <Col key={i} mt={7} width={[1, 1 / 2, 1 / 3, 1 / 4]}>
          <ProductCard data={product} />
        </Col>
      ))}
  </Row>
);

export default ProductsList;
