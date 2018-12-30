import { graphql, DataValue } from 'react-apollo';
import gql from 'graphql-tag';
import styled from '@emotion/styled';
import { ThemeProps } from '../core/theme';

interface Feed {
	count: number;
}

interface Props {
	title?: string;
	theme: ThemeProps;
	data: DataValue<{ feed: Feed }>;
}

const SomeText = styled.div`
	background: ${(props: Props) => props.theme.colors.primary};
`;

const helloWorld = (props: Props) => {
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

export default graphql(FEED_QUERY)(helloWorld);
