import React from 'react';
import { NextFunctionComponent } from 'next';
import { Container } from 'lib/ui';
import { Breadcrumb, ProductCompare } from 'components';
import defaultPage from 'hoc/defaultPage';
// import mockData from 'static/mockdata.json';
import { searchProductsByField } from 'lib/services/productsService';

const Compare: NextFunctionComponent<any> = ({
  pageProps,
  categoriesData,
  routeQuery
}) => {
  const queryId = pageProps.parentId || routeQuery.id;

  const category =
    categoriesData.children_data &&
    categoriesData.children_data.find(
      item => Number(item.id) === Number(queryId)
    );

  const breadcrumbData = () => {
    return (
      categoriesData && [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Compare',
          path: '/'
        },
        {
          name: `${category.name}`,
          path: '#'
        }
      ]
    );
  };

  return (
    <>
      <Container>
        <Breadcrumb mt={3} routes={breadcrumbData()} />
        <ProductCompare
          key={category.name}
          categoryName={category.name}
          products={pageProps.products.items}
        />
      </Container>
    </>
  );
};

Compare.getInitialProps = async ctx => {
  const products = await searchProductsByField('category_id', ctx.query.id);
  return {
    products
  };
};

export default defaultPage(Compare, 'Compare');
