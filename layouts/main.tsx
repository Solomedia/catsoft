import React from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from '../core/styles';
import Head from '../components/head';
import Nav from '../components/nav';
import Header from '../components/header';

// interface Props {
// 	children: React.ReactNode;
// 	title?: string;
// }

class PageLayout extends React.Component<any> {
	public static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer', 'header']
		};
	}

	public render() {
		const { children, title } = this.props;

		return (
			<React.Fragment>
				<Global styles={globalStyles} />

				<Head title={title} />
				<Header />

				<Nav />
				<h1>With Layout</h1>
				{children}
			</React.Fragment>
		);
	}
}

export default PageLayout;
