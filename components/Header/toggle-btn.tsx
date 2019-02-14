import HamburgerMenu from 'react-hamburger-menu';

import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import { breakpoints } from 'lib/theme';

interface Props {
	displayMobileMenu: boolean;
	handleToggle: () => void;
}

const ToggleBtn: React.SFC<Props> = props => {
	const { displayMobileMenu, handleToggle } = props;

	return (
		<Box
			mr={1}
			css={css`
				@media (min-width: ${breakpoints['sm']}) {
					display: none;
				}
			`}
		>
			<HamburgerMenu
				isOpen={displayMobileMenu}
				menuClicked={handleToggle}
				width={30}
				height={18}
				strokeWidth={3}
				rotate={0}
				color="#fff"
				borderRadius={100}
				animationDuration={0.4}
			/>
		</Box>
	);
};

export default ToggleBtn;
