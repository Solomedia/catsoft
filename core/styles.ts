import css from '@emotion/css';
import normalize from './styles-normalizer';

export const globalStyles = css`
	${normalize}
	body {
		font-family: 'Montserrat', sans-serif;
	}
	a {
		text-decoration: none;
		&:hover {
			cursor: pointer;
		}
	}
	input {
		&:focus {
			outline: 0;
		}
	}
`;
