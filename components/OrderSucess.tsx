import Router from 'next/router';
import { Box } from '@rebass/grid/emotion';
import styled from 'lib/theme';
import { Text, Button } from 'lib/ui';

const OrderSucess = () => (
  <Wrapper>
    <Text fontSize={8} weight="300">
      Your order has been received.
    </Text>
    <CheckIcon className="material-icons">check_circle_outline</CheckIcon>
    <Text mt="70px" fontSize={8} weight="300">
      Thank you for your purchase!
    </Text>

    <Text color="#7F7F99" mt={2} fontSize={4} weight="500">
      Your order # is: 800010927.
    </Text>

    <Text lineHeight="22px" mx="auto" maxWidth="526px" mt={7} weight="500">
      Our Team is working hard to deploy your license within 15 minutes. In the
      maintime you can download your software in your dashboard.
    </Text>

    <Button
      onClick={() => Router.push('/')}
      py="17px"
      fontSize="14px"
      mt={9}
      mx="auto"
      maxWidth="382px"
      revert
    >
      CONTINUE SHOPPING
    </Button>
  </Wrapper>
);

const Wrapper = styled(Box)`
  background: #fff;
  min-height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  text-align: center;
  padding: 125px 15px 50px;
`;

const CheckIcon: any = styled.i`
  color: #90ee90;
  font-size: 90px;
  margin-top: 61px;
`;

export default OrderSucess;
