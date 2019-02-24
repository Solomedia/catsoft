import { Col, Row, SearchInput, Text, Button, Container } from 'lib/ui';
import { Box } from '@rebass/grid/emotion';
import { colors } from 'lib/theme';
import { css } from '@emotion/core';

const { containerBg3 } = colors;

interface Props {
  mt?: number | number[];
}

const SubscribeForm: React.SFC<Props> = ({ mt }) => (
  <Box bg={containerBg3} py={3} mt={mt}>
    <Container>
      <Row justifyContent="space-between" alignItems="center">
        <Col width="40%">
          <Text weight="600" fontSize={'17px'}>
            Subscribe our newsletter to get 5% off on your first purchase!
          </Text>
        </Col>
        <Col width="40%">
          <SearchInput width={1} placeholder="Type your email here" />
        </Col>
        <Col
          width="20%"
          css={css`
            text-align: center;
          `}
        >
          <Button fontSize="12px" weight="500" width="100%" md>
            GET MY DISCOUNT
          </Button>
        </Col>
      </Row>
    </Container>
  </Box>
);

export default SubscribeForm;
