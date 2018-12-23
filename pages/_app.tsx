import App, { Container } from 'next/app';
import theme from '../core/theme';
import { ThemeProvider } from 'emotion-theming';

class MyApp extends App {
	public render() {
		const { Component, pageProps } = this.props;
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
