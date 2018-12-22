import App, { Container } from 'next/app';
import React from 'react';
import theme from '../utils/theme';
import { ThemeProvider } from 'emotion-theming';

class MyApp extends App {
	public render() {
		const { Component, pageProps } = this.props;
		// const testprops = {...pageProps, theme}
		return (
			<ThemeProvider theme={theme}>
				<Container>
					<Component {...pageProps} />
				</Container>
			</ThemeProvider>
		);
	}
}

export default MyApp;
