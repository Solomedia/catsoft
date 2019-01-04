import styled from '../core/theme';

interface Feed {
	count: number;
}

interface Props {
	title?: string;
	data: Feed;
}

const SomeText = styled('div')`
	background: ${props => props.theme.colors.bittersweet};
`;

const helloWorld: React.SFC<Props> = props => {
	const { title, data: feed } = props;

	return (
		<div>
			<h1>{title || 'Hello world'}</h1>
			<h1>{feed.count}</h1>
			<SomeText>Some text</SomeText>
			<button onClick={() => console.log(props.data)}>log props</button>
		</div>
	);
};

export default helloWorld;
