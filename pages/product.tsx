import React from 'react';
import Main from 'layouts/main';
import { Container } from 'utils/ui';
import { ProductDetail } from 'components';

class Products extends React.Component<{}> {
	public static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer', 'header']
		};
	}

	public render() {
		return (
			<Main title="Product">
				<Container>
					<h1>Product Detail</h1>
					<ProductDetail />
				</Container>
			</Main>
		);
	}
}

export default Products;
