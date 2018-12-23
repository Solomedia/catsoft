import styled from '@emotion/styled';
import { Box } from '@rebass/grid/emotion';
import { breakpoints } from '../core/theme';

export const Container: Box = styled(Box)`
	max-width: 1200px;
	margin: auto;
	padding: 0 15px;
	background: ${props => props.theme.colors.primary};
`;

export const ContainerFluid = styled(Box)`
	padding: 0 15px;
`;

export const Row = styled(Box)`
	@media (min-width: ${breakpoints['sm']}) {
		display: flex;
	}
`;
