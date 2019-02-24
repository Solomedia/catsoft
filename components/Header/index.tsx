import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { withTheme } from 'emotion-theming';
import { graphql } from 'react-apollo';
import { css } from '@emotion/core';
import { Box, Flex } from '@rebass/grid/emotion';

import styled, { ThemeProps, breakpoints } from 'lib/theme';
import { Col, Container } from 'lib/ui';
import TopNav from './top-nav';
import Nav from './nav';
import Cta from './cta';
import SearchBar from './searchbar';
import * as i18Next from 'i18n';
import ToggleBtn from './toggle-btn';

const { withNamespaces } = i18Next;

interface Props {
  t: (arg: string) => string;
  theme: ThemeProps;
}

class Header extends React.Component<Props> {
  public state = {
    displayMobileMenu: false
  };

  private async onToggleMobileMenu(displayMobileMenu) {
    await this.setState({
      displayMobileMenu: !displayMobileMenu
    });
    this.state.displayMobileMenu
      ? (document.querySelector('body').style.overflowY = 'hidden')
      : (document.querySelector('body').style.overflowY = 'auto');
  }

  public render() {
    const { t, theme } = this.props;
    const { displayMobileMenu } = this.state;

    return (
      <Box
        css={css`
          background-color: ${theme.colors.secondary};
          @media (max-width: ${breakpoints['sm']}) {
            display: flex;
            flex-direction: column;
            min-height: ${displayMobileMenu ? '100vh' : 'auto'};
            padding-bottom: ${displayMobileMenu ? '100px' : 'auto'};
            position: relative;
          }
        `}
      >
        <ToggleBox
          displayMobileMenu={displayMobileMenu}
          order={3}
          css={css`
            background-color: ${theme.colors.secondary};
            @media (max-width: ${breakpoints['sm']}) {
              position: absolute;
              bottom: 15px;
              left: 50%;
              transform: translateX(-50%);
              width: 100%;
            }
          `}
        >
          <TopNav t={t} />
        </ToggleBox>

        <Hr />
        <Box
          order={1}
          css={css`
            padding: 30px 0 15px;
            @media (min-width: ${breakpoints['sm']}) {
              padding: 17px 0 24px;
            }
          `}
        >
          <Container>
            <Flex
              css={css`
                align-items: center;
                margin: 0 -15px;
                @media (max-width: ${breakpoints['sm']}) {
                  flex-wrap: wrap;
                  justify-content: space-between;
                }
              `}
            >
              <Col
                order={1}
                width={[1 / 2, 1 / 5]}
                css={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <ToggleBtn
                  displayMobileMenu={displayMobileMenu}
                  handleToggle={() =>
                    this.onToggleMobileMenu(displayMobileMenu)
                  }
                />

                <Link href="/">
                  <Logo>CATSOFT</Logo>
                </Link>
              </Col>

              <SearchCol
                displayMobileMenu={displayMobileMenu}
                order={[3, 2]}
                width={1}
              >
                <SearchBar />
              </SearchCol>

              <CtaCol order={[2, 3]}>
                {/* TODO: set i18n for Cta's text prop. */}
                <Cta
                  path="/"
                  ctaType="persone"
                  text="Hello, log in or sign up"
                />
                <Cta
                  path="/cart"
                  ctaType="shopping_cart"
                  text="Your cart"
                  inCard={0}
                />
              </CtaCol>
            </Flex>
          </Container>
        </Box>

        <ToggleBox displayMobileMenu={displayMobileMenu} order={2}>
          <Nav />
        </ToggleBox>
      </Box>
    );
  }
}

const Logo = styled.a`
  label: logo;
  font-size: 20px;
  color: white;
  font-weight: 900;
  @media (min-width: ${breakpoints['sm']}) {
    font-size: 30px;
  }
`;

const Hr = styled.hr`
  @media (max-width: ${breakpoints['sm']}) {
    display: none;
  }
  background-color: #6354ea;
  border: 0;
  width: 100%;
  height: 1px;
`;

const SearchCol: Box = styled(Col)`
  label: searchCol;
  display: ${(props: any) => (props.displayMobileMenu ? 'none' : 'block')};
  max-width: 694px;
  margin-top: 15px;

  @media (min-width: ${breakpoints['sm']}) {
    display: block;
    margin-top: auto;
  }
`;

const ToggleBox: Box = styled(Box)`
  label: toggleBox;
  display: ${(props: any) => (!props.displayMobileMenu ? 'none' : 'block')};
  @media (min-width: ${breakpoints['sm']}) {
    display: block;
  }
`;

const CtaCol: Box = styled(Col)`
  label: ctaCol;
  display: flex;
  justify-content: space-around;
  max-width: 113px;
  width: 50%;
  @media (min-width: ${breakpoints['sm']}) {
    min-width: 260px;
    max-width: auto;
    width: 40%;
  }
`;

// TODO: Fix CATEGORIES_QUERY calls once server CORS bug is fix
const CATEGORIES_QUERY = gql`
  query category {
    category(id: 2) {
      children {
        name
        id
        position
        products {
          items {
            name
            id
          }
        }
      }
    }
  }
`;

export default graphql(CATEGORIES_QUERY)(
  withNamespaces('header')(withTheme(Header))
);
