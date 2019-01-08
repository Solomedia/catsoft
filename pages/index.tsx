import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import { graphql, DataValue } from 'react-apollo';
import gql from 'graphql-tag';
import HelloWorld from '../components/helloworld';
import Main from '../layouts/main';
import { Container, Row, Column } from '../utils/ui';
import * as i18Next from '../i18n';

const { withNamespaces } = i18Next;

class Home extends React.Component<{ data: DataValue<{ feed }>; t }> {
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
					<h1>{t('greeting')}</h1>
					<HelloWorld data={this.props.data} />
					<Flex>
						<Box width={[1 / 2]} px={2} fontSize={[0, 1, 2]}>
							Half width
						</Box>
						<Box width={[1 / 4]} px={2}>
							Half width
						</Box>
					</Flex>
					<Row>
						<Column width={1 / 2}>Half width</Column>
						<Column width={1 / 2}>other width</Column>
					</Row>
				</Container>
			</Main>
		);
	}
}

const FEED_QUERY = gql`
	query feed {
		feed {
			count
			links {
				url
			}
		}
	}
`;

export default graphql(FEED_QUERY)(withNamespaces('common')(Home));
