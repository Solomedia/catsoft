import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Helloworld from '../components/helloworld';

const data = {
	feed: {
		count: 12
	}
};

storiesOf('Test Stories', module)
	.add('Helloworld component', () => <Helloworld data={data.feed} />)
	.add('Other hello component', () => (
		<Helloworld data={data.feed} title="Another world" />
	));
