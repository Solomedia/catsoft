import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import HelloWorld from '../components/helloworld';

const Home = () => (
	<div>
		<Head title="Home" />
		<Nav />

		<div className="hero">
			<h1 className="title">Welcome</h1>
			<div className="row">
				<HelloWorld />
			</div>
		</div>
	</div>
);

export default Home;
