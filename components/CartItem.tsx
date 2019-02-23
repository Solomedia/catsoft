import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import { Col, Text } from 'lib/ui';
import styled, { breakpoints } from 'lib/theme';
import { css } from '@emotion/core';
import { default as ProductInt } from 'lib/models/product';
import { QuantitySelect } from './';
import { colors } from 'lib/theme';
import { withCartContext } from 'contexts/CartContext';

const { borderColor, dangerColor, textColor2 } = colors;
// TODO: Create interface for data
interface Props {
  data: ProductInt;
  mt?: number | number[];
  currency: string;
  context: any;
}

interface State {
  productQuantity: null | number;
}

interface PriceInt {
  discount: number;
  totalPrice: string;
  originalPrice?: string;
  currency: string;
  singlePrice: string;
}

class CartItem extends React.Component<Props, State> {
  public state = {
    productQuantity: null
  };

  public componentDidMount() {
    const { data: product } = this.props;
    this.setState({ productQuantity: product.qty || 1 });
  }

  private getPrice = (item, currency, productQuantity): PriceInt => {
    const {
      price,
      extension_attributes: { negotiable_quote_item }
    } = item;

    if (!negotiable_quote_item) {
      return {
        discount: null,
        totalPrice: String(price.toFixed(2) * productQuantity),
        singlePrice: price.toFixed(2),
        currency
      };
    }

    const { original_price, original_discount_amount } = negotiable_quote_item;

    const discount = price * Number(`.${Math.trunc(original_discount_amount)}`);
    const finalPrice: any = price - discount;

    return {
      discount: original_discount_amount,
      totalPrice: String(finalPrice.toFixed(2) * productQuantity),
      originalPrice: original_price.toFixed(2),
      singlePrice: finalPrice.toFixed(2),
      currency
    };
  };

  public render() {
    const { productQuantity } = this.state;
    const { data: product, mt, currency, context } = this.props;
    const price = product && this.getPrice(product, currency, productQuantity);
    return (
      <Box mt={mt}>
        {product ? (
          <Flex
            justifyContent={['unset', 'space-between']}
            pt={4}
            css={css`
              border-top: 1px solid ${borderColor};
            `}
          >
            <Box mr={['0px', 5]} width={['auto', '10%']}>
              <ProductImg
                src={product.image || 'https://via.placeholder.com/104x118'}
              />
            </Box>

            <Flex
              mt={['0px', 1]}
              width={[1, '90%']}
              flexDirection={['column', 'row']}
              css={css`
                @media (max-width: ${breakpoints['sm']}) {
                  max-width: 350px;
                }
              `}
            >
              <Col width={[1, '40%']}>
                <Title>{product.name}</Title>
                <RemoveBtn hide_xs onClick={e => console.log(e)}>
                  <i className="material-icons">delete_outline</i>
                  <RemoveText>REMOVE</RemoveText>
                </RemoveBtn>
              </Col>

              <Flex
                width={[1, '60%']}
                alignItems={['center', 'unset']}
                mt={[2, '0px']}
              >
                <Col width={[1 / 2, 1 / 3]}>
                  <QuantitySelect
                    mt="3px"
                    productQty={product.qty}
                    onQuantityChange={async (quantity, isAdding) => {
                      await this.setState({ productQuantity: quantity });
                      context.updateCartContext(price.singlePrice, isAdding);
                    }}
                  />
                  <InstockText>{product.in_stock || 12} avaliable</InstockText>
                </Col>

                <Col
                  width={1 / 3}
                  css={css`
                    @media (max-width: ${breakpoints['sm']}) {
                      display: none;
                    }
                  `}
                >
                  {price.discount && (
                    <Flex>
                      <OriginalPriceText>
                        {price.originalPrice}
                      </OriginalPriceText>
                      <DiscountText>{price.discount}% off</DiscountText>
                    </Flex>
                  )}
                  <PriceText pt={!price.discount && '16px'}>
                    {`$${price.singlePrice} ${price.currency}`}
                  </PriceText>
                </Col>
                <Col width={[1 / 2, 1 / 3]}>
                  <PriceText pt={['0px', '16px']}>{`$${price.totalPrice} ${
                    price.currency
                  }`}</PriceText>
                </Col>
              </Flex>
              <RemoveBtn hide_sm onClick={e => console.log(e)}>
                <i className="material-icons">delete_outline</i>
                <RemoveText>REMOVE</RemoveText>
              </RemoveBtn>
            </Flex>
          </Flex>
        ) : (
          <div />
        )}
      </Box>
    );
  }
}

const ProductImg = styled.img`
  label: ProductImg;
  width: 100%;
`;

const Title = styled.p`
  font-weight: 500;
`;

const OriginalPriceText = styled.div`
  color: ${textColor2};
  font-weight: 300;
  text-decoration: line-through;
`;

const DiscountText = styled.div`
  color: ${textColor2};
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  margin-left: 5px;
`;

const PriceText: Box = styled(Text)`
  label: PriceText;
  font-weight: 300;
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 24px;
  }
`;

const RemoveText = styled.p`
  text-transform: uppercase;
  color: ${dangerColor};
  font-size: 12px;
  font-weight: 500;
`;

const RemoveBtn: any = styled.button`
  display: ${(props: any) => (!props.hide_xs ? 'flex' : 'none')};
  align-items: center;
  margin-top: 10px;
  background: transparent;
  border: 0;
  @media (min-width: ${breakpoints['sm']}) {
    display: ${(props: any) => (!props.hide_sm ? 'flex' : 'none')};
    margin-top: 20px;
  }
  i {
    color: ${dangerColor};
  }
`;

const InstockText = styled.p`
  color: #98aaba;
  font-weight: 300;
  line-height: 18px;
  margin-top: 5px;
  text-align: center;
  width: 123px;
  @media (max-width: ${breakpoints['sm']}) {
    display: none;
  }
`;

export default withCartContext(CartItem);
