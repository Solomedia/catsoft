import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import { Row, Col } from 'lib/ui';
import styled, { breakpoints } from 'lib/theme';
import { css } from '@emotion/core';
import { default as ProductInt } from 'lib/models/product';
import { QuantitySelect } from './';
import { colors } from 'lib/theme';

const { borderColor, dangerColor } = colors;

interface Props {
  data: ProductInt;
  mt?: number | number[];
  currency: string;
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
    const { data: product, mt, currency } = this.props;
    const price = product && this.getPrice(product, currency, productQuantity);
    return (
      <Box
        mt={mt}
        css={css`
          border-top: 1px solid ${borderColor};
          padding-top: 30px;
        `}
      >
        {product ? (
          <Flex justifyContent={['unset', 'space-between']}>
            <Box width={['auto', '10%']}>
              <ImgBox>
                <img
                  src={product.image || 'https://via.placeholder.com/104x118'}
                />
              </ImgBox>
            </Box>

            <Row width={['auto', '90%']} pl={[3, '0px']}>
              <Col>
                <Title>{product.name}</Title>
                <RemoveBtn hide_xs onClick={e => console.log(e)}>
                  <i className="material-icons">delete_outline</i>
                  <RemoveText>REMOVE</RemoveText>
                </RemoveBtn>
              </Col>

              <Flex alignItems={['center', 'unset']} mt={[2, '0px']}>
                <Col>
                  <QuantitySelect
                    mt="3px"
                    productQty={product.qty}
                    onQuantityChange={quantity =>
                      this.setState({ productQuantity: quantity })
                    }
                  />
                  <InstockText>{product.in_stock || 12} avaliable</InstockText>
                </Col>

                <Col
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
                  <PriceText>
                    {`$${price.singlePrice} ${price.currency}`}
                  </PriceText>
                </Col>
                <Col>
                  <PriceText
                    css={css`
                      @media (min-width: ${breakpoints['sm']}) {
                        padding-top: 17px;
                      }
                    `}
                  >{`$${price.totalPrice} ${price.currency}`}</PriceText>
                </Col>
              </Flex>
              <RemoveBtn hide_sm onClick={e => console.log(e)}>
                <i className="material-icons">delete_outline</i>
                <RemoveText>REMOVE</RemoveText>
              </RemoveBtn>
            </Row>
          </Flex>
        ) : (
          <div />
        )}
      </Box>
    );
  }
}

const ImgBox = styled(Box)`
  label: ImgBox;
  min-width: 104px;
`;

const Title = styled.p`
  font-weight: 500;
`;

const OriginalPriceText = styled.div`
  color: #7f7f99;
  font-weight: 300;
  text-decoration: line-through;
`;

const DiscountText = styled.div`
  color: #7f7f99;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  margin-left: 5px;
`;

const PriceText = styled.p`
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
  @media (max-width: ${breakpoints['sm']}) {
    display: none;
  }
`;

export default CartItem;
