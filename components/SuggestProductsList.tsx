import { AddProduct } from './';
import { Text, Row, Col } from 'lib/ui';

interface Props {
  data: any;
}

const SuggestProductsList: React.SFC<Props> = ({ data: products }) => (
  <Row flexWrap="wrap">
    <Text weigth="500" px={2} width={1} mt={6}>
      Get fully protected with these suggestions
    </Text>
    {products &&
      products.map(product => (
        <Col mt={5} key={product.item_id} width={1 / 3}>
          <AddProduct data={product} key={product.item_id} />
        </Col>
      ))}
  </Row>
);

export default SuggestProductsList;
