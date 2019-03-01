import React from 'react';
import { Container, Text } from 'lib/ui';
import { ProductsList, SelectFilter } from 'components';
import mockData from 'static/mockdata.json';
import { css } from '@emotion/core';
import styled, { colors } from 'lib/theme';
import { Flex, Box } from '@rebass/grid/emotion';
import defaultPage from 'hoc/defaultPage';

const { textColor2, textColor4 } = colors;

const Cart = () => (
  <>
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
      <ProductsList
        grid={[1, 1 / 2, 1 / 3, 1 / 4]}
        data={mockData.products_list}
      />
    </Container>
  </>
);

const QuoteStyled = styled.span`
  font-weight: 600;
  color: ${textColor4};
`;

export default defaultPage(Cart);
