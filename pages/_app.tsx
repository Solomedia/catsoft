import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../core/theme';
import withApolloClient from '../core/with-apollo-client';

class MyApp extends App<{ apolloClient }> {
	public render() {
		const { Component, pageProps, apolloClient } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<ApolloProvider client={apolloClient}>
					<Container>
						<Component {...pageProps} />
					</Container>
				</ApolloProvider>
			</ThemeProvider>
		);
	}
}

export default withApolloClient(MyApp);
