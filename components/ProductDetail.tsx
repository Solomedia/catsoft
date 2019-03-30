import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import { Row, Col, Button } from 'lib/ui';
import styled, { theme, breakpoints } from 'lib/theme';
import { default as ProductInt } from 'lib/models/product';
import { QuantitySelect } from './';
import { addGuestCartItem } from 'lib/services/cartsService';
import Router from 'next/router';

const {
  colors: { borderColor, amber, black }
} = theme;

interface Props {
  data: ProductInt;
  guestCartId: string;
}

interface PriceInt {
  discount: number;
  totalPrice: string;
  originalPrice?: string;
  currency: string;
}

function getPrice(price, specialPrice): PriceInt {
  const value = price;
  const currency = 'usd';

  if (!specialPrice) {
    return {
      discount: null,
      totalPrice: value.toFixed(2),
      currency
    };
  }

  const discount = value * Number(`.${Math.trunc(specialPrice)}`);
  const totalPrice = value - discount;

  return {
    discount: Math.trunc(discount),
    totalPrice: totalPrice.toFixed(2),
    originalPrice: value.toFixed(2),
    currency
  };
}

async function addToCartHandler(guestCartId, product, productQuantity, path) {
  const body = {
    cartItem: {
      sku: product.sku,
      qty: productQuantity,
      quote_id: guestCartId
    }
  };

  await addGuestCartItem(guestCartId, body);
  Router.push(`/${path}?id=${guestCartId}`);
}

function buyNowHandler(guestCartId, product, productQuantity) {
  addToCartHandler(guestCartId, product, productQuantity, 'checkout');
}

const ProductDetail: React.SFC<Props> = ({ data: product, guestCartId }) => {
  const price = product && getPrice(product.price, product.special_price);
  let productQuantity = 1;

  if (!product) return <div>No product data fetch</div>;

  return (
    <Row mt={4}>
      <Col width={[1, 1 / 2]}>
        <ImgBox>
          <img src={product.image || 'https://via.placeholder.com/333x366'} />
        </ImgBox>
      </Col>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        width={[1, 1 / 2]}
        px={'15px'}
        mt={[2, '0']}
      >
        <SubTitle>
          from:
          <span>&nbsp;{product.manufacturer}</span>
        </SubTitle>
        <Title>{product.name}</Title>

        <SelectTitle>Quantity:</SelectTitle>
        <QuantitySelect
          mt="3px"
          onQuantityChange={quantity => (productQuantity = quantity)}
        />

        {price.discount && (
          <Flex mt={3}>
            <OriginalPriceText>
              Usually at {price.originalPrice}
            </OriginalPriceText>
            <DiscountText>{price.discount}% off</DiscountText>
          </Flex>
        )}
        <PriceTotalText>
          {`$${price.totalPrice} ${price.currency}`}
        </PriceTotalText>

        <Flex mt={3}>
          <Box>
            <Button
              md
              onClick={() =>
                buyNowHandler(guestCartId, product, productQuantity)
              }
            >
              buy now
            </Button>
          </Box>

          <ReverButton
            revert
            md
            onClick={() =>
              addToCartHandler(guestCartId, product, productQuantity, 'cart')
            }
          >
            add to card
          </ReverButton>
        </Flex>
        <HelpText>
          Need help? Call Us at <span>800-318-1439</span> or{' '}
          <a href="#">click here</a> for live chat
        </HelpText>
      </Flex>
    </Row>
  );
};

const ImgBox = styled(Box)`
  label: ImgBox;
  border: 1px solid ${borderColor};
  padding: 32px 40px;
  text-align: center;

  @media (min-width: ${breakpoints['sm']}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const SubTitle = styled.p`
  label: SubTitle;
  color: #7f7f99;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  margin-top: 5px;
  span {
    color: #212b36;
  }
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: 300;

  @media (min-width: ${breakpoints['sm']}) {
    font-size: 45px;
  }
`;

const PriceTotalText = styled.p`
  font-size: 38px;
  font-weight: 600;
  line-height: 54px;
  margin-top: 5px;
  text-transform: uppercase;
`;

const OriginalPriceText = styled.p`
  color: #7f7f99;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  text-decoration: line-through;
`;

const DiscountText = styled.p`
  color: #fff;
  font-weight: 600;
  background-color: ${amber};
  margin-left: 5px;
  padding: 1px 5px;
  text-transform: uppercase;
`;

const SelectTitle = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 14px;
  margin-top: 20px;
`;

const ReverButton: any = styled(Button)`
  max-width: 190.33px;
  margin-left: 10px;
`;

const HelpText = styled.p`
  font-size: 10px;
  font-weight: 500;
  opacity: 0.7;
  line-height: 22px;
  margin-top: 15px;
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 12px;
    margin-top: auto;
  }
  span,
  a {
    color: ${black};
    font-weight: 600;
    opacity: 1;
  }
`;

export default ProductDetail;
