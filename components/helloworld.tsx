import React from 'react';

interface Props {
	title?: string;
}
const helloWorld = (props: Props) => (
	<div>
		<h1>{props.title || 'Hello world'}</h1>
	</div>
);

export default helloWorld;
