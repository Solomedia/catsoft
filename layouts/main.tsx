import React from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from 'lib/styles';
import { Footer, Head, Header } from 'components';

interface Props {
  children: React.ReactNode;
  title?: string;
  categoriesData: any;
}

const PageLayout: React.SFC<Props> = ({ children, title, categoriesData }) => (
  <>
    <Global styles={globalStyles} />
    <Head title={title} />
    <Header categoriesData={categoriesData} />
    {children}
    <Footer />
  </>
);

export default PageLayout;
