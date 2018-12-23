import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import HelloWorld from '../components/helloworld';
import Main from '../layouts/main';
import { Container, Row } from '../utils/ui';

class Home extends React.Component {
	public render() {
		return (
			<Main title="Home Page">
				<Container mt={[0, 1, 2]}>
					<HelloWorld />
					<Flex>
						<Box width={1 / 2} px={2} bg="tomato">
							Half width
						</Box>
						<Box width={1 / 2} px={2} bg="red" mt={[1]}>
							Half width
						</Box>
					</Flex>
					<Row>
						<Box width={1 / 2} px={2} bg="tomato">
							Half width
						</Box>
						<Box width={1 / 2} px={2} bg="red" mt={[1]}>
							other width
						</Box>
					</Row>
				</Container>
			</Main>
		);
	}
}

export default Home;
