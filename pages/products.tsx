import React from 'react';
import { Container } from 'lib/ui';
import { Box, Flex } from '@rebass/grid/emotion';
import {
  BannerWithTabs,
  SelectFilter,
  CategoriesSideBar,
  ProductCompareEditions,
  ProductsList
} from 'components';
import mockData from 'static/mockdata.json';
import defaultPage from 'hoc/defaultPage';

const Products: React.SFC<{}> = () => (
  <>
    <Container>
      <BannerWithTabs
        title="Microsoft"
        subTitle="office"
        tabs={['windows', 'tabs']}
        mt={[2, 6]}
      />
      <Flex justifyContent="flex-end" mt={4}>
        <Box>
          <SelectFilter options={['best selling', 'refine']} />
        </Box>
      </Flex>
      <Flex flexDirection={['column', 'row']}>
        <CategoriesSideBar />
        <ProductsList data={mockData.products_list} />
      </Flex>
      <ProductCompareEditions />
    </Container>
  </>
);

export default defaultPage(Products);
