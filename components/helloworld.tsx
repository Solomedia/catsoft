import React from 'react';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';

// interface Props {
// 	title?: string;
// }

const SomeText = styled.div`
	background: ${props =>
		props.theme.length ? props.theme.colors.primary : 'purple'};
`;

const helloWorld = (props: any) => (
	<div>
		<h1>{props.title || 'Hello world'}</h1>
		<p>{props.theme.colors.primary}</p>
		<SomeText>Some text</SomeText>
	</div>
);

export default withTheme(helloWorld);
