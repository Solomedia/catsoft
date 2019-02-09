import React from 'react';
import { Global } from '@emotion/core';
import { globalStyles } from '../core/styles';
import { Footer, Head, Header } from '../components';

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
				{children}
				<Footer />
			</React.Fragment>
		);
	}
}

export default PageLayout;
