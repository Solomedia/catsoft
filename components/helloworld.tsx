import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from '@emotion/styled';

const SomeText = styled.div`
	background: ${props => props.theme.colors.primary};
`;

const helloWorld = props => {
	const {
		title,
		data: { feed }
	} = props;

	return (
		<div>
			<h1>{title || 'Hello world'}</h1>
			<h1>{feed.count}</h1>
			<SomeText theme={props.theme}>Some text</SomeText>
			<button onClick={() => console.log(props.data)}>log props</button>
		</div>
	);
};

const FEED_QUERY = gql`
	query feed {
		feed {
			count
		}
	}
`;

interface Feed {
	count: number;
}

interface Response {
	feed: Feed;
}

interface InputProps {
	title?: string;
}

export default graphql<InputProps, Response>(FEED_QUERY)(helloWorld);
