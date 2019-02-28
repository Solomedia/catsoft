import React from 'react';

export default Page =>
  class DefaultPage extends React.Component {
    public static getInitialProps(ctx) {
      if (Page.getInitialProps) return Page.getInitialProps(ctx);
      return {
        namespacesRequired: ['common', 'footer', 'header']
      };
    }

    public render() {
      return <Page {...this.props} />;
    }
  };
