import React from 'react';
import { DataValue } from 'react-apollo';
import { Box } from '@rebass/grid/emotion';
// Local modules
import Main from '../layouts/main';
import HeroWithCta from '../components/hero-with-cta';
import Reviews from '../components/reviews';
import { Container } from '../utils/ui';
import { ThemeProps } from '../core/theme';
import { theme } from '../core/theme';
import ReviewSlider from '../components/review-slider';
import BrandsBannerMob from '../components/brands-banner-mob';

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
