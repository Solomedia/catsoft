import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import { DataValue } from 'react-apollo';
// import gql from 'graphql-tag';
import HelloWorld from '../components/helloworld';
import Main from '../layouts/main';
import { Container, Row, Col } from '../utils/ui';
import CtaHero from '../components/cta-hero';

class Home extends React.Component<{ data: DataValue<{ feed }> }> {
	public static async getInitialProps() {
		return {
			namespacesRequired: ['common', 'footer', 'header']
		};
	}

	public render() {
		return (
			<Main title="Home Page">
				<Container>
					<CtaHero />
				</Container>
				<Container mt={[0, 1, 2]}>
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
						<Col width={1 / 2}>Half width</Col>
						<Col width={1 / 2}>other width</Col>
					</Row>
				</Container>
			</Main>
		);
	}
}

// const FEED_QUERY = gql`
// 	query feed {
// 		feed {
// 			count
// 			links {
// 				url
// 			}
// 		}
// 	}
// `;

// export default graphql(FEED_QUERY)(Home);
export default Home;
