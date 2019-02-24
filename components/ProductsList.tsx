import { ProductCard } from './';
import { Row, Col } from 'lib/ui';

interface Props {
  mt?: number | number[];
  data: any[];
  grid?: any[];
}

const ProductsList: React.SFC<Props> = ({ data: products, mt, grid }) => (
  <Row mt={mt} flexWrap="wrap">
    {products &&
      products.map((product, i) => (
        <Col key={i} mt={7} width={grid}>
          <ProductCard data={product} />
        </Col>
      ))}
  </Row>
);

export default ProductsList;
