import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled, { ThemeProps, breakpoints } from '../../core/theme';

const LinkStyled = styled.a`
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	@media (min-width: ${breakpoints['sm']}) {
		color: #000032;
		font-size: 14px;
	}
`;

interface Props {
	text: string;
	theme: ThemeProps;
}

const CategoryItem: React.SFC<Props> = props => {
	const { text, theme } = props;

	return (
		<Box
			mr={2}
			css={css`
				margin-top: 10px;
				height: 181.3px;
				width: 384px;
				border-radius: 1.4px;
				background-color: ${theme.colors.primary};
			`}
		>
			<Box
				css={css`
					margin-top: 5px;
					height: 96px;
					width: 135px;
					background-color: #ffc000;
				`}
			>
				Hello
			</Box>
			<h1>{text}</h1>
			<LinkStyled>a</LinkStyled>
		</Box>
	);
};

export default withTheme(CategoryItem);
