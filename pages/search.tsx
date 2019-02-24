import React from 'react';
import Main from 'layouts/main';
import { Container, Text } from 'lib/ui';
import { ProductsList, SelectFilter } from 'components';
import mockData from 'static/mockdata.json';
import { css } from '@emotion/core';
import styled, { colors } from 'lib/theme';
import { Flex, Box } from '@rebass/grid/emotion';

const { textColor2, textColor4 } = colors;

class Cart extends React.Component<{}> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer', 'header']
    };
  }

  public render() {
    return (
      <Main title="search">
        <Container>
          <Flex
            mt={4}
            flexDirection={['column', 'row']}
            justifyContent="space-between"
          >
            <Box>
              <Text color="#727272">
                Showing{' '}
                <span
                  css={css`
                    font-weight: 600;
                  `}
                >
                  {mockData.products_list && mockData.products_list.length}
                </span>{' '}
                search results for:
              </Text>
              <Text weight="300" fontSize={10}>
                <QuoteStyled>“</QuoteStyled>
                Office
                <QuoteStyled>”</QuoteStyled>
              </Text>
            </Box>
            <Flex alignItems="center" mt={[1, '0']}>
              <Text mr={1} color={textColor2}>
                Sort by
              </Text>
              <SelectFilter options={['best selling', 'refine']} />
            </Flex>
          </Flex>
          <ProductsList data={mockData.products_list} />
        </Container>
      </Main>
    );
  }
}

const QuoteStyled = styled.span`
  font-weight: 600;
  color: ${textColor4};
`;

export default Cart;
