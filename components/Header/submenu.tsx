import Link from 'next/link';
import AnimateHeight from 'react-animate-height';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import styled, { breakpoints } from 'lib/theme';

const comparisonsLinkId = 'compare';

interface Product {
  id: string;
  name: string;
  sku: string;
  parent_id: string;
}

interface Props {
  show: boolean;
  data: Product[];
}

const SubMenu: React.SFC<Props> = props => {
  const { data: products, show } = props;

  return (
    <AnimateHeight duration={300} height={show ? 'auto' : 0}>
      <Wrapper show={show}>
        {products &&
          products.map((product, index) => {
            if (index <= 7) {
              return (
                <Link
                  key={product.id}
                  href={
                    `${product.parent_id}` === comparisonsLinkId
                      ? `/compare?id=${product.id}`
                      : `/products?id=${product.id}&parent_id=${
                          product.parent_id
                        }`
                  }
                >
                  <Box
                    mt={1}
                    css={css`
                      @media (max-width: ${breakpoints['sm']}) {
                        text-align: center;
                      }
                    `}
                  >
                    <LinkStyled>
                      {product.name
                        .split(' ')
                        .slice(0, 3)
                        .join(' ')}
                    </LinkStyled>
                  </Box>
                </Link>
              );
            } else if (index === 8) {
              return (
                <Link
                  key={product.id}
                  href={`/products?id=${product.parent_id}`}
                >
                  <SeeAllLink>See all</SeeAllLink>
                </Link>
              );
            }
          })}
      </Wrapper>
    </AnimateHeight>
  );
};

const Wrapper: Box = styled(Box)`
  label: submenu-wrapper;
  background-color: ${(props: any) => props.theme.colors.primary};
  padding: 15px 0;
  min-width: 200px;
  position: relative;
  margin-top: 15px;

  @media (min-width: ${breakpoints['sm']}) {
    background-color: #fff;
    border: 1px solid #d4d5e2;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
    font-size: 14px;
    padding: 12px 16px;
    position: absolute;
    margin-top: 0px;
    visibility: ${(props: any) => (props.show ? 'visible' : 'hidden')};
    opacity: ${(props: any) => (props.show ? 1 : 0)};
    top: 90%;
    left: 60%;
    transform: translateX(-50%);
    transition: opacity 0.2s;
    overflow: visible;
    z-index: 2;
  }
  &:before {
    @media (max-width: ${breakpoints['sm']}) {
      display: none;
    }
    content: '';
    width: 0px;
    height: 0px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
    position: absolute;
    top: -8px;
    left: 40%;
    transform: translateX(-50%);
  }
`;

const LinkStyled = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  @media (min-width: ${breakpoints['sm']}) {
    color: #000032;
    font-size: 14px;
  }
`;

const SeeAllLink = styled.a`
  font-size: 18px;
  font-style: italic;
  color: #ffc000;
  font-weight: 500;
  text-align: center;
  display: block;
  margin-top: 17px;
  @media (min-width: ${breakpoints['sm']}) {
    color: #5c56c8;
    font-size: 12px;
    text-align: left;
  }
`;

export default SubMenu;
