import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { Container } from 'lib/ui';
import {
  ProductDetail,
  ProductAbout,
  Breadcrumb,
  ProductDescription,
  IncludedProductsList,
  Reviews,
  CompareTable
} from 'components';
import ProductSummary from 'components/ProductSummary';
import mockData from 'static/mockdata.json';
import { theme } from 'lib/theme';
import defaultPage from 'hoc/defaultPage';
import { getProductBySku } from 'lib/services/productsService';
import { NextFunctionComponent } from 'next';

const {
  colors: { containerBg2, whisper }
} = theme;

const Product: NextFunctionComponent<any> = ({ pageProps, categoriesData }) => {
  const productData = mockData.product;

  const breadcrumbData = () => {
    const parentCategoryId = pageProps.product.custom_attributes.find(
      atr => atr.attribute_code === 'category_ids'
    ).value[1];

    const parentCategory =
      parentCategoryId &&
      categoriesData.children_data.find(
        item => item.id === Number(parentCategoryId)
      );

    return [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: `${parentCategory.name}`,
        path: `/products?id=${parentCategoryId}`
      },
      {
        name: `${pageProps.product.name}`,
        path: '#'
      }
    ];
  };

  const description =
    pageProps.product &&
    pageProps.product.custom_attributes.find(
      atr => atr.attribute_code === 'description'
    );

  return (
    <>
      <Container>
        <Breadcrumb mt={3} routes={breadcrumbData()} />
        <ProductDetail data={pageProps.product} />
        <ProductDescription mt={4} template={description.value} />
        <ProductAbout />
      </Container>
      <Box bg={whisper}>
        <Container>
          <ProductSummary />
          <IncludedProductsList
            mt={[5, 11]}
            data={productData && productData.included_packages}
          />
        </Container>
      </Box>
      <Container>
        <CompareTable />
      </Container>
      <Box bg={containerBg2} pt={[3, 7]} pb={[4, 10]} mt={5}>
        <Container>
          <Reviews />
        </Container>
      </Box>
    </>
  );
};

Product.getInitialProps = async ctx => {
  const product = await getProductBySku(ctx.query.sku);
  return {
    product
  };
};

export default defaultPage(Product);
