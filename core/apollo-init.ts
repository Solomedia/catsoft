import { ApolloClient, InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { graphqlEndpoint } from '../utils/constants';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

let apolloClient = null;
const isBrowser = typeof window !== 'undefined';

const httpLink = createHttpLink({
	uri: graphqlEndpoint
	// fetchOptions: {
	// 	mode: 'no-cors'
	// }
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers
			// 'Custom-Header': 'data'
		}
	};
});

if (!isBrowser) {
	global['fetch'] = fetch;
}

function create(initialState) {
	return new ApolloClient({
		connectToDevTools: isBrowser,
		ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
		link: authLink.concat(httpLink),
		cache: new InMemoryCache().restore(initialState)
	});
}

export default function initApollo(initialState?: object) {
	// Make sure to create a new client for every server-side request so that data
	// isn't shared between connections (which would be bad)
	if (!isBrowser) {
		return create(initialState);
	}

	// Reuse client on the client-side
	if (!apolloClient) {
		apolloClient = create(initialState);
	}

	return apolloClient;
}
