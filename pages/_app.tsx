import App, { Container } from 'next/app';
import { ThemeProvider } from 'emotion-theming';
import { theme } from 'lib/theme';
import withApolloClient from 'lib/withApolloClient';
import * as i18next from 'i18n';
const { appWithTranslation } = i18next;

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

export default withApolloClient(appWithTranslation(MyApp));
