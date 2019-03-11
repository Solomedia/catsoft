import React from 'react';
import { NextFunctionComponent } from 'next';
import { Container } from 'lib/ui';
import { Box, Flex } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import {
  BannerWithTabs,
  SelectFilter,
  CategoriesSideBar,
  CompareTable,
  ProductsList
} from 'components';
import defaultPage from 'hoc/defaultPage';
import { searchProductsByField } from 'lib/services/productsService';

const Products: NextFunctionComponent<any> = ({
  pageProps,
  categoriesData,
  routeQuery
}) => {
  const queryId = pageProps.parentId || routeQuery.id;

  const categoriesVersion =
    categoriesData.children_data &&
    categoriesData.children_data.filter(
      item => Number(item.id) === Number(queryId)
    )[0];

  return (
    <>
      <Container>
        <BannerWithTabs
          title="Microsoft"
          subTitle="office"
          tabs={['windows', 'mac']}
          mt={[2, 6]}
        />
        <Flex justifyContent="flex-end" mt={4}>
          <Box
            css={css`
              z-index: 1;
            `}
          >
            <SelectFilter options={['best selling', 'refine']} />
          </Box>
        </Flex>
        <Flex flexDirection={['column', 'row']}>
          <CategoriesSideBar
            versionCategories={
              categoriesVersion && categoriesVersion.children_data
            }
            queryId={routeQuery.id}
          />

          <ProductsList data={pageProps.products.items} />
        </Flex>
        <CompareTable />
      </Container>
    </>
  );
};

Products.getInitialProps = async ctx => {
  const products = await searchProductsByField('category_id', ctx.query.id);
  return {
    products,
    parentId: ctx.query.parent_id
  };
};

export default defaultPage(Products);
