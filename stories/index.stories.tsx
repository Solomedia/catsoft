import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Helloworld from '../components/helloworld';

storiesOf('Test Stories', module).add('Helloworld component', () => (
	<Helloworld />
));
