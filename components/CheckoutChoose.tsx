import { Box } from '@rebass/grid/emotion';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Row, Text, Button } from 'lib/ui';
import { css } from '@emotion/core';
import styled, { colors, breakpoints } from 'lib/theme';
import { isBrowser } from 'lib/constants';

const { textColor3, containerBg2 } = colors;

const CheckoutChoose = ({ total }) => {
  const client = {
    sandbox: 'YOUR-SANDBOX-APP-ID',
    production: 'YOUR-PRODUCTION-APP-ID'
  };

  return (
    <Box mt={5}>
      <Row>
        <Text ml={[3, '77px']} color={textColor3} weight="300" fontSize={8}>
          Checkout
        </Text>
      </Row>
      <Row>
        <Container mt={9} width={[1, 1 / 2]}>
          <PayPalLogo
            src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png"
            alt="PayPal Logo"
          />
          <PayPalBtn mt={4}>
            {isBrowser && (
              <PaypalExpressBtn
                client={client}
                currency={'USD'}
                total={total}
                style={{
                  size: 'responsive',
                  label: 'pay',
                  tagline: 'false',
                  height: 55
                }}
              />
            )}
          </PayPalBtn>
        </Container>
        <Container mt={9} width={[1, 1 / 2]}>
          <Text
            weight="500"
            fontSize={1}
            css={css`
              line-height: 25px;
            `}
          >
            Credit Card
          </Text>
          <SubmitBtn href="#card-info" py="17px" mt={4}>
            PLACE YOUR ORDER
          </SubmitBtn>
        </Container>
      </Row>
    </Box>
  );
};

const Container: Box = styled(Box)`
  border: 1px solid ${containerBg2};
  margin-right: 25px;
  padding: 0 20px;
  @media (min-width: ${breakpoints['sm']}) {
    padding: 60px 77px;
  }
`;

const PayPalBtn: Box = styled(Box)`
  max-height: 55px;
  overflow: hidden;
  max-width: 370px;
  width: 100%;
`;

const SubmitBtn: Box = styled(Button)`
  font-size: 14px;
  max-width: 370px;
  width: 100%;
`;

const PayPalLogo = styled.img`
  width: 98px;
`;

export default CheckoutChoose;
