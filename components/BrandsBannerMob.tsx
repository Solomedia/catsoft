import { css } from '@emotion/core';
// Local modules
import { breakpoints } from '../lib/theme';
import { Container, Text } from '../utils/ui';
import { Box } from '@rebass/grid/emotion';

const BrandsBannerMob = () => (
	<Box
		css={css`
			padding: 32px 0;
			@media (min-width: ${breakpoints['sm']}) {
				display: none;
			}
		`}
	>
		<Container>
			<Text
				css={css`
					color: #000032;
					font-size: 24px;
					font-weight: 300;
					line-height: 32px;
					text-align: center;
					max-width: 322px;
					margin: auto;
				`}
			>
				CatSoft provides softwares to the world's best companies
			</Text>
			<Box mt={1}>
				<img
					css={css`
						width: 100%;
						margin: auto;
						max-width: 346px;
					`}
					src="https://via.placeholder.com/346x250"
				/>
			</Box>
		</Container>
	</Box>
);

export default BrandsBannerMob;
