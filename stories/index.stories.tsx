import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Helloworld from 'components/helloworld';
import { Button } from 'utils/ui';
import { theme } from 'lib/theme';

const data = {
	feed: {
		count: 12
	}
};

storiesOf('Buttons Stories', module)
	.add('Button small', () => (
		<Button theme={theme} sm>
			Click here
		</Button>
	))
	.add('Button medium', () => (
		<Button theme={theme} md>
			Click here
		</Button>
	))
	.add('Button large', () => (
		<Button theme={theme} lg>
			Click here
		</Button>
	))
	.add('Button default', () => <Button theme={theme}>Click here</Button>);

storiesOf('Test Stories', module)
	.add('Helloworld component', () => <Helloworld data={data.feed} />)
	.add('Other hello component', () => (
		<Helloworld data={data.feed} title="Another world" />
	));
