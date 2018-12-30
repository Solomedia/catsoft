import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import { ThemeProps } from '../utils/theme';

interface Props {
	title?: string;
	theme: ThemeProps;
}

const SomeText = styled.div`
	background: ${props => props.theme.colors.primary};
`;

const helloWorld = (props: Props) => (
	<div>
		<h1>{props.title || 'Hello world'}</h1>
		{/* <p>{props.theme.colors.primary}</p> */}
		<SomeText theme={props.theme}>Some text</SomeText>
	</div>
);

export default withTheme(helloWorld);
