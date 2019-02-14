import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'lib/theme';
import withApolloClient from 'lib/withApolloClient';
import * as i18next from '../i18n';
const { appWithTranslation } = i18next;

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

export default withApolloClient(appWithTranslation(MyApp));
