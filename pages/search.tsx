import React from 'react';
import { NextFunctionComponent } from 'next';
import { Container, Text } from 'lib/ui';
import { ProductsList, SelectFilter } from 'components';
import { css } from '@emotion/core';
import styled, { colors } from 'lib/theme';
import { Flex, Box } from '@rebass/grid/emotion';
import defaultPage from 'hoc/defaultPage';
import { searchProductsByName } from 'lib/services/productsService';

const { textColor2, textColor4 } = colors;

const Search: NextFunctionComponent<any> = ({ pageProps }) => {
  const { data: products, searchValue } = pageProps;

  function content() {
    if (!products) return <Text>Loading...</Text>;

    return (
      <>
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
                {products.items.length}
              </span>{' '}
              search results for:
            </Text>
            <Text weight="300" fontSize={10}>
              <QuoteStyled>“</QuoteStyled>
              {searchValue}
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
        <ProductsList grid={[1, 1 / 2, 1 / 3, 1 / 4]} data={products.items} />
      </>
    );
  }
  return <Container>{content()}</Container>;
};

const QuoteStyled = styled.span`
  font-weight: 600;
  color: ${textColor4};
`;

Search.getInitialProps = async ctx => {
  const searchParam = String(ctx.query.value).replace(/ /g, '%20');
  const data = await searchProductsByName(searchParam, 99, 1);

  return {
    data,
    searchValue: ctx.query.value
  };
};

export default defaultPage(Search);
