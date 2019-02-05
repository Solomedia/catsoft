import React from 'react';
import { DataValue } from 'react-apollo';
import { Box } from '@rebass/grid/emotion';
// Local modules
import Main from '../layouts/main';
import { Container } from '../utils/ui';
import { ThemeProps } from '../core/theme';
import { theme } from '../core/theme';
import {
	BrandsBannerMob,
	ReviewSlider,
	Reviews,
	HeroWithCta
} from '../components';

interface Props {
	data: DataValue<{ feed }>;
	theme: ThemeProps;
}

class Home extends React.Component<Props> {
	public static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer', 'header']
		};
	}

	public render() {
		return (
			<Main title="Home Page">
				<Container>
					<HeroWithCta />
				</Container>
				<BrandsBannerMob />
				<Box bg={theme.colors.containerBg2} mt={['0', 3]} py={['30px', '80px']}>
					<Container>
						<Reviews />
						<ReviewSlider />
					</Container>
				</Box>
			</Main>
		);
	}
}

export default Home;
