import React from 'react';
import initApollo from './apollo-init';
import Head from 'next/head';
import { getDataFromTree } from 'react-apollo';

const withApolloClient = App => {
	return class Apollo extends React.Component<{ apolloState }> {
		public static displayName = 'withApollo(App)';
		public static async getInitialProps(ctx) {
			const { Component, router } = ctx;

			let appProps = {};
			if (App.getInitialProps) {
				appProps = await App.getInitialProps(ctx);
			}

			// Run all GraphQL queries in the component tree
			// and extract the resulting data
			const apollo = initApollo();
			const isBrowser = typeof window !== 'undefined';

			if (!isBrowser) {
				try {
					// Run all GraphQL queries
					await getDataFromTree(
						<App
							{...appProps}
							Component={Component}
							router={router}
							apolloClient={apollo}
						/>
					);
				} catch (error) {
					// Prevent Apollo Client GraphQL errors from crashing SSR.
					// Handle them in components via the data.error prop:
					// https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
					console.error('Error while running `getDataFromTree`', error);
				}

				// getDataFromTree does not call componentWillUnmount
				// head side effect therefore need to be cleared manually
				Head.rewind();
			}

			// Extract query data from the Apollo store
			const apolloState = apollo.cache.extract();

			return {
				...appProps,
				apolloState
			};
		}

		public apolloClient = initApollo(this.props.apolloState);

		public render() {
			this.apolloClient.initQueryManager();
			return <App {...this.props} apolloClient={this.apolloClient} />;
		}
	};
};

export default withApolloClient;
