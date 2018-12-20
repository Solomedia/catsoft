import React from 'react';
import Head from '../components/head';
import HelloWorld from '../components/helloworld';
import Nav from '../components/nav';

const Test = () => (
	<div>
		<Head title="Test page" />
		<Nav />
		<HelloWorld title="Hellow test page" />
	</div>
);

export default Test;
