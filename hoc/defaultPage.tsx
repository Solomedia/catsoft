import React from 'react';
import Main from 'layouts/main';
import { getCategories } from 'lib/services/categoriesService';
const isBrowser = typeof window !== 'undefined';

interface Props {
  categoriesData?: any;
}

export default (Page, title = 'Catsoft') =>
  class DefaultPage extends React.Component<Props> {
    public static async getInitialProps(ctx) {
      let pageProps = {};
      let categoriesData;

      if (Page.getInitialProps) pageProps = await Page.getInitialProps(ctx);

      if (!isBrowser) {
        categoriesData = await getCategories();
      } else {
        if (!localStorage.getItem('categoriesData')) {
          categoriesData = await getCategories();
          localStorage.setItem(
            'categoriesData',
            JSON.stringify(categoriesData)
          );
        } else {
          const categoriesDataValue = localStorage.getItem('categoriesData');
          categoriesData = JSON.parse(categoriesDataValue);
        }
      }

      return {
        namespacesRequired: ['common', 'footer', 'header'],
        categoriesData,
        routeQuery: ctx.query,
        pageProps
      };
    }

    public async componentDidMount() {
      const categoriesData = await getCategories();
      localStorage.setItem('categoriesData', JSON.stringify(categoriesData));
    }

    public render() {
      const { categoriesData } = this.props;

      return (
        <Main categoriesData={categoriesData} title={title}>
          <Page {...this.props} />
        </Main>
      );
    }
  };
