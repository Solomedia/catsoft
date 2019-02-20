import css from '@emotion/css';
import normalize from './stylesNormalizer';
import { theme } from './theme';

const {
  colors: { textColor }
} = theme;

export const globalStyles = css`
  ${normalize}
  button,
	input,
	optgroup,
	select,
	textarea,
	body {
    color: ${textColor};
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
    margin: 0;
  }
  p,
  ul {
    margin: 0;
  }
  a {
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    max-width: 100%;
  }
`;
