import React from 'react';
import HelloWorld from '../components/helloworld';
import PageLayout from '../layouts/page';

const Test = () => (
	<PageLayout title="test page">
		<HelloWorld title="Hellow test page" />
	</PageLayout>
);

export default Test;
