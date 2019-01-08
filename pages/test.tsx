import React from 'react';
import { graphql, DataValue } from 'react-apollo';
import gql from 'graphql-tag';
import HelloWorld from '../components/helloworld';
import Main from '../layouts/main';
import { Container } from '../utils/ui';
import * as i18Next from '../i18n';

const { withNamespaces } = i18Next;

class Test extends React.Component<{ data: DataValue<{ feed }>; t }> {
	public static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer']
		};
	}

	public render() {
		const { t } = this.props;
		return (
			<Main title="Home Page">
				<Container mt={[0, 1, 2]}>
					<h1>{t('description')}</h1>
					<HelloWorld data={this.props.data} />
				</Container>
			</Main>
		);
	}
}

const FEED_QUERY = gql`
	query feed {
		feed {
			count
		}
	}
`;

export default graphql(FEED_QUERY)(withNamespaces('footer')(Test));
