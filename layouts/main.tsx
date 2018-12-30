import React from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from '../core/styles';
import Head from '../components/head';
import Nav from '../components/nav';

interface Props {
	children: React.ReactNode;
	title?: string;
}

const PageLayout = ({ children, title }: Props) => (
	<React.Fragment>
		<Global styles={globalStyles} />

		<Head title={title} />
		<Nav />
		<h1>With Layout</h1>
		{children}
	</React.Fragment>
);

export default PageLayout;
