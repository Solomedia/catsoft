import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { graphqlEndpoint } from '../utils/constants';

let apolloClient = null;
const isBrowser = typeof window !== 'undefined';

if (!isBrowser) {
	global['fetch'] = fetch;
}

function create(initialState) {
	return new ApolloClient({
		connectToDevTools: isBrowser,
		ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
		link: new HttpLink({
			uri: graphqlEndpoint
			// fetchOptions: {
			// 	mode: 'no-cors'
			// }
		}),
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
