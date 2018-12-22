import styled from '@emotion/styled';
import { Box } from '@rebass/grid/emotion';

export const Container = styled(Box)`
	max-width: 1200px;
	margin: auto;
	padding: 0 15px;
	background: ${props => {
		console.log(props.theme);
		return props.theme ? 'red' : 'blue';
	}};
`;

export const ContainerFluid = styled.div`
	padding: 0 15px;
`;
