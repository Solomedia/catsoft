import React from 'react';
import Main from '../layouts/main';
import { Container } from '../utils/ui';
import { BannerWithTabs, SelectFilter } from '../components';
import { Box } from '@rebass/grid/emotion';

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
					<Box mt={4} mb={'100px'}>
						<SelectFilter options={['best selling', 'refine']} />
					</Box>
				</Container>
			</Main>
		);
	}
}

export default Products;
