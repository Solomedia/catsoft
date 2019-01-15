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

export const Text: Box = styled(Box)`
	font-size: 14px;
`;

Text.defaultProps = {
	as: 'p'
};

export const Button: Box = styled(Box)`
	label: button;
	font-size: ${(props: any) => {
		const { lg } = props;
		if (lg) return '14px';
		return '10px';
	}};
	font-weight: 300;
	background-color: ${props => props.theme.colors.secondary};
	padding: 7px 10px;
	color: #eeeffb;
	border-radius: 37px;
	text-transform: uppercase;
	min-height: ${(props: any) => {
		const { lg } = props;
		if (lg) return '47px';
		return '33px';
	}};
	width: ${(props: any) => {
		const { sm, md, lg } = props;
		if (sm) return '109px';
		if (md) return '161px';
		if (lg) return '177px';
		return 'auto';
	}};
	@media (min-width: ${breakpoints['sm']}) {
		min-height: ${(props: any) => {
			const { lg, md } = props;
			if (md) return '48px';
			if (lg) return '74px';
			return '';
		}};
		width: ${(props: any) => {
			const { sm, md, lg } = props;
			if (sm) return '102px';
			if (md) return '233px';
			if (lg) return '282px';
			return '';
		}};
	}
`;

Button.defaultProps = {
	as: 'button'
};
