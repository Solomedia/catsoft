import React from 'react';
import { NextFunctionComponent } from 'next';
import { Global } from '@emotion/core';
import { globalStyles } from 'lib/styles';
import { Footer, Head, Header } from 'components';

interface Props {
  children?: React.ReactNode;
  title?: string;
  categoriesData?: any;
}

const PageLayout: NextFunctionComponent<Props> = ({
  children,
  title,
  categoriesData
}) => (
  <>
    <Global styles={globalStyles} />
    <Head title={title} />
    <Header categoriesData={categoriesData} />
    {children}
    <Footer />
  </>
);

export default PageLayout;
