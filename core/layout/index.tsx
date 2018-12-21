import React from 'react';
import Head from '../../components/Head';
import Nav from '../../components/Nav';
import { globalStyles, stylesNormalizer } from './styles';
import { Global } from '@emotion/core';

stylesNormalizer();

interface Props {
	children: any;
	title?: string;
}

const PageLayout = ({ children, title }: Props) => (
	<React.Fragment>
		<Global styles={globalStyles} />
		<div>
			<Head title={title} />
			<Nav />
			<h1>With Layout</h1>
			{children}
		</div>
	</React.Fragment>
);

export default PageLayout;
