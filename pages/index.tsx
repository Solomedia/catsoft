import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import HelloWorld from '../components/helloworld';
import PageLayout from '../layouts/page';
import { Container } from '../utils/ui';

const Home = () => (
	<PageLayout title="Home Page">
		<Container mt={[2, 2]}>
			<HelloWorld />
			<p> Hello test </p>
			<Flex>
				<Box width={1} px={4} bg="tomato">
					Half width
				</Box>
				<Box width={1} px={2} bg="blue">
					Half width
				</Box>
				<Box width={1} px={2} bg="red">
					Half width
				</Box>
			</Flex>
		</Container>
	</PageLayout>
);

export default Home;
