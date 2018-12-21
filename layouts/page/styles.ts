import css from '@emotion/css';
import { injectGlobal } from 'emotion';
import emotionNormalize from 'emotion-normalize';

export const stylesNormalizer = () => injectGlobal`
${emotionNormalize}
`;

export const globalStyles = css`
	p {
		font-size: 14px;
	}
`;
