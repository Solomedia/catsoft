import React from 'react';
import Main from '../layouts/main';
import { Container } from '../utils/ui';
import { BannerWithTabs } from '../components';

class Products extends React.Component<{}> {
	public static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer', 'header']
		};
	}

	public render() {
		return (
			<Main title="Products">
				<Container>
					<BannerWithTabs
						title="Microsoft"
						subTitle="office"
						tabs={['windows', 'tabs']}
						mt={[2, 6]}
					/>
				</Container>
			</Main>
		);
	}
}

export default Products;
