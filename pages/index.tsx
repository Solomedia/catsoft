import React from 'react';
// import Head from '../components/Head';
// import Nav from 'components/Nav';
import HelloWorld from '../components/helloworld';
import PageLayout from '../core/layout';

const Home = () => (
	<PageLayout title="Home Page">
		<div className="hero">
			<h1 className="title">Welcome</h1>
			<div className="row">
				<HelloWorld />
				<p> Hello test </p>
			</div>
		</div>
	</PageLayout>
);

export default Home;
