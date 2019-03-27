import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import Link from 'next/link';
import { css } from '@emotion/core';
import { addGuestCartItem } from 'lib/services/cartsService';
import Router from 'next/router';
import { Button } from 'lib/ui';
import styled, { breakpoints } from 'lib/theme';
import { createGuestCart } from 'lib/services/cartsService';
import { guestCartIdKeyName } from 'lib/constants';

interface Props {
  price: number;
  sku: string;
}

async function addToCartHandler(sku) {
  let guestCartId: string;

  if (!localStorage.getItem(guestCartIdKeyName))
    createGuestCart().then(data => {
      guestCartId = data;
    });
  else guestCartId = localStorage.getItem(guestCartIdKeyName);

  const body = {
    cartItem: {
      sku,
      qty: 1,
      quote_id: guestCartId
    }
  };

  await addGuestCartItem(guestCartId, body);
  Router.push(`/cart?id=${guestCartId}`);
}

const Title: React.SFC<Props> = ({ price, sku }) => (
  <Box
    css={css`
      text-align: center;
    `}
  >
    <PriceTotalText>${price.toFixed(2)} usd</PriceTotalText>
    <Flex mt={3} flexDirection="column" alignItems="center">
      <Box>
        <Link href={`/product?sku=${sku}`}>
          <PrimaaryBtn>buy now</PrimaaryBtn>
        </Link>
      </Box>

      <SecundaryBtn revert onClick={() => addToCartHandler(sku)}>
        add to card
      </SecundaryBtn>
    </Flex>
  </Box>
);

const PriceTotalText = styled.p`
  font-size: 38px;
  font-weight: 600;
  line-height: 54px;
  text-transform: uppercase;
`;

const PrimaaryBtn: Box = styled(Button)`
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 14px;
    border-radius: 37px;
    min-height: 64px;
    width: 265px;
  }
`;

const SecundaryBtn: Box = styled(Button)`
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 14px;
    border-width: 1px;
    border-radius: 16px;
    min-height: 32px;
    width: 265px;
    margin-top: 5px;
  }
`;

export default Title;
