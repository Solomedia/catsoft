import css from '@emotion/css';
import normalize from './styles-normalizer';

export const globalStyles = css`
	${normalize}
	button,
	input,
	optgroup,
	select,
	textarea,
	body {
		font-family: 'Montserrat', sans-serif;
	}
	button {
		cursor: pointer;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		&:focus,
		&:active {
			outline: 0;
		}
	}
	p {
		margin: 0;
	}
	a {
		text-decoration: none;
		&:hover {
			cursor: pointer;
		}
	}
`;
