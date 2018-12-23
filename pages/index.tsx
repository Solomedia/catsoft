import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import HelloWorld from '../components/helloworld';
import Main from '../layouts/main';
import { Container, Row, Column } from '../utils/ui';

class Home extends React.Component {
	public render() {
		return (
			<Main title="Home Page">
				<Container mt={[0, 1, 2]}>
					<HelloWorld />
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

export default Home;
