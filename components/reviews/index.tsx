import { Flex } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
// Local modules
import Rate from './rate';
import { breakpoints } from '../../core/theme';
// TODO: Mock data for Rate || fetch data.
const Reviews = () => (
	<Flex
		py={3}
		justifyContent="space-between"
		css={css`
			@media (max-width: ${breakpoints['sm']}) {
				flex-wrap: wrap;
				max-width: 335px;
				margin: auto;
			}
		`}
	>
		<Rate open />
		<Rate />
		<Rate />
		<Rate />
	</Flex>
);

export default Reviews;
