import React from 'react';
import gql from 'graphql-tag';
import { withTheme } from 'emotion-theming';
import { graphql } from 'react-apollo';
import { css } from '@emotion/core';
import { Box } from '@rebass/grid/emotion';
import { Container, Col, Row } from 'lib/ui';
import CategoryItem from './CategoryItem';
import data from 'static/mockdata.json';

import styled, { ThemeProps, breakpoints } from 'lib/theme';
import * as i18Next from '../../i18n';

const { withNamespaces } = i18Next;

interface Props {
  t: (arg: string) => string;
  theme: ThemeProps;
}

class Category extends React.Component<Props> {
  public state = {
    displayMobileMenu: false
  };

  public render() {
    const { theme } = this.props;
    const { displayMobileMenu } = this.state;

    return (
      <Box
        css={css`
          background-color: ${theme.colors.containerBg2};
          padding: 20px 0 60px 0;
          @media (max-width: ${breakpoints['sm']}) {
            display: flex;
            flex-direction: column;
            min-height: ${displayMobileMenu ? '100vh' : 'auto'};
            padding-bottom: ${displayMobileMenu ? '100px' : '0'};
            position: relative;
          }
        `}
      >
        <Container>
          <Title>Shop by category</Title>
          <Row
            css={css`
              align-items: center;
              @media (max-width: ${breakpoints['sm']}) {
                flex-wrap: wrap;
                justify-content: space-between;
              }
            `}
          >
            {data &&
              data.shop_by_category &&
              data.shop_by_category.map(
                ({ color, image, imageAlt, subtitle, title }, i) => (
                  <Col
                    width={[1, 1 / 3]}
                    key={i}
                    css={css`
                      align-items: center;
                      display: flex;
                    `}
                  >
                    <CategoryItem
                      color={color}
                      image={image}
                      imageAlt={imageAlt}
                      subtitle={subtitle}
                      title={title}
                    />
                  </Col>
                )
              )}
          </Row>
        </Container>
      </Box>
    );
  }
}

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

const Title = styled.p`
  color: '#000032';
  font-size: 28px;
  font-weight: 300;
  line-height: 32px;
  margin-bottom: 24px;
`;

export default graphql(CATEGORIES_QUERY)(
  withNamespaces('header')(withTheme(Category))
);
