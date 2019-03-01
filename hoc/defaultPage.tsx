import React from 'react';
import Main from 'layouts/main';
import { getCategories } from 'lib/services/categoriesService';

interface Props {
  categoriesData?: any;
}

export default (Page, title = 'Catsoft') =>
  class DefaultPage extends React.Component<Props> {
    public static async getInitialProps(ctx) {
      if (Page.getInitialProps) return Page.getInitialProps(ctx);
      const categoriesData = await getCategories();

      return {
        namespacesRequired: ['common', 'footer', 'header'],
        categoriesData
      };
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
