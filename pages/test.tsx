import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import HelloWorld from '../components/helloworld';
import Main from '../layouts/main';

const Test = props => (
	<Main title="test page">
		<HelloWorld data={props.data.feed} title="Hellow test page" />
	</Main>
);

const FEED_QUERY = gql`
	query feed {
		feed {
			count
		}
	}
`;

export default graphql(FEED_QUERY)(Test);
