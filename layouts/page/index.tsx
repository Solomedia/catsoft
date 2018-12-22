import React from 'react';
import { globalStyles } from './styles';
import { Global } from '@emotion/core';
import Head from '../../components/Head';
import Nav from '../../components/Nav';

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
