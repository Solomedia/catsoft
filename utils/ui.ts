import { Flex, Box } from '@rebass/grid/emotion';
import styled, { breakpoints } from '../core/theme';

export const Container: Box = styled(Box)`
	label: container;
	max-width: 1200px;
	margin: auto;
	padding: 0 15px;
`;

export const ContainerFluid = styled(Box)`
	label: 'container-fluid';
	padding: 0 15px;
`;

export const Row: Flex = styled(Flex)`
	label: row;
	margin: 0 -15px;
	flex-direction: column;
	@media (min-width: ${breakpoints['sm']}) {
		flex-direction: row;
	}
`;

export const Col: Box = styled(Box)`
	label: col;
	padding: 0 15px;
`;
