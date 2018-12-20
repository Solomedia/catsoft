import { configure } from '@storybook/react';

const req = require.context('../stories', true, /index.stories.tsx$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
