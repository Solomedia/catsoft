import React from 'react';
import Link from 'next/link';
import { Flex, Box } from '@rebass/grid/emotion';
import { isMobile } from 'react-device-detect';

import { Col, Text } from 'lib/ui';
import styled, { breakpoints } from 'lib/theme';
import SubMenu from './submenu';

interface State {
  showSubmenu: boolean;
}

interface Props {
  product: any;
}

class NavItem extends React.Component<Props> {
  public state: State = {
    showSubmenu: false
  };

  public render() {
    const { product } = this.props;
    const { showSubmenu } = this.state;

    const LinkContent = product && product.children_data && (
      <Flex alignItems="center" justifyContent="center">
        <LinkStyled
          color="#fff"
          weight="600"
          fontSize={[4, 0]}
          show={showSubmenu}
          as="a"
        >
          {product.name}
        </LinkStyled>
        <LinkIcon
          className="material-icons"
          withProducts={product.children_data.length}
        >
          {isMobile && showSubmenu ? 'expand_less' : 'expand_more'}
        </LinkIcon>
      </Flex>
    );

    if (product && product.children_data) {
      return (
        <Wrapper
          onMouseEnter={() => !isMobile && this.setState({ showSubmenu: true })}
          onMouseLeave={() =>
            !isMobile && this.setState({ showSubmenu: false })
          }
          onClick={() => {
            if (isMobile && product.children_data.length) {
              this.setState((state: any) => ({
                showSubmenu: !state.showSubmenu
              }));
              document.querySelector('body').style.overflowY = 'auto';
            }
          }}
        >
          {!isMobile || !product.children_data.length ? (
            <Link prefetch href={`/products?id=${product.id}`}>
              {LinkContent}
            </Link>
          ) : (
            LinkContent
          )}
          {product.children_data.length > 0 && (
            <SubMenu show={showSubmenu} data={product.children_data} />
          )}
        </Wrapper>
      );
    } else {
      return <div />;
    }
  }
}

const Wrapper: Box = styled(Col)`
  padding: 0;
  margin-top: 15px;
  position: relative;
  @media (min-width: ${breakpoints['sm']}) {
    padding: 16px 15px;
    margin-top: 0;
  }
`;

const LinkStyled: any = styled(Text)`
  position: relative;
  text-transform: uppercase;
  &:before {
    content: '';
    width: 0px;
    height: 0px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid ${(props: any) => props.theme.colors.primary};
    position: absolute;
    bottom: -19px;
    right: -25px;
    visibility: ${(props: any) => (props.show ? 'visible' : 'hidden')};
    opacity: ${(props: any) => (props.show ? 1 : 0)};
    transition: opacity 0.2s;
    @media (min-width: ${breakpoints['sm']}) {
      display: none;
    }
  }
`;

const LinkIcon: any = styled.i`
  color: #d4d5e2;
  margin-top: 5px;
  font-size: 25px;
  visibility: ${(props: any) => (!props.withProducts ? 'hidden' : 'visible')};
  @media (min-width: ${breakpoints['sm']}) {
    margin-left: 13px;
    margin-top: auto;
    font-size: 20px;
  }
`;

export default NavItem;
