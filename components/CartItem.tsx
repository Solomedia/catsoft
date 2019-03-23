import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import { Col, Text } from 'lib/ui';
import styled, { breakpoints } from 'lib/theme';
import { css } from '@emotion/core';
import { QuantitySelect } from './';
import { colors } from 'lib/theme';
import { withCartContext } from 'contexts/CartContext';
import { deleteGuestCartItem } from 'lib/services/cartsService';
import { isBrowser, guestCartIdKeyName } from 'lib/constants';

const { borderColor, dangerColor, textColor2 } = colors;
// TODO: Create interface for data
interface Props {
  data: any;
  mt?: number | number[];
  currency: string;
  context: any;
  updateCartData: () => any;
}

interface State {
  productQuantity: null | number;
}

interface PriceInt {
  discount: number;
  totalPrice: string;
  originalPrice?: string;
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

  private getPrice = (item, productQuantity): PriceInt => {
    const { price, specialPrice, originalPrice } = item;

    if (!specialPrice) {
      return {
        discount: null,
        totalPrice: String((price * productQuantity).toFixed(2)),
        singlePrice: price.toFixed(2)
      };
    }

    const discount = price * Number(`.${Math.trunc(specialPrice)}`);
    const finalPrice: any = price - discount;

    return {
      discount,
      totalPrice: String(finalPrice * productQuantity.toFixed(2)),
      originalPrice: originalPrice.toFixed(2),
      singlePrice: finalPrice.toFixed(2)
    };
  };

  private removeItemHandler = async itemId => {
    const cartId = isBrowser && localStorage.getItem(guestCartIdKeyName);
    await deleteGuestCartItem(cartId, itemId);
    this.props.updateCartData();
  };

  public render() {
    const { productQuantity } = this.state;
    const { data: product, mt, context, currency } = this.props;
    const price = product && this.getPrice(product, productQuantity);
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
                <RemoveBtn
                  hide_xs
                  onClick={() => this.removeItemHandler(product.item_id)}
                >
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
                      context.updateCartContext(
                        quantity,
                        product,
                        price.singlePrice,
                        isAdding
                      );
                    }}
                  />
                  <InstockText>{product.in_stock || 99} avaliable</InstockText>
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
                    {`$${price.singlePrice} ${currency}`}
                  </PriceText>
                </Col>
                <Col width={[1 / 2, 1 / 3]}>
                  <PriceText pt={['0px', '16px']}>{`$${
                    price.totalPrice
                  } ${currency}`}</PriceText>
                </Col>
              </Flex>
              <RemoveBtn
                hide_sm
                onClick={() => this.removeItemHandler(product.item_id)}
              >
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
