import { Box, Flex } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled, { ThemeProps, breakpoints } from 'lib/theme';
import { Col, Button } from 'utils/ui';

interface Props {
	color: string;
	title: string;
	subtitle: string;
	image: string;
	imageAlt: string;
	theme: ThemeProps;
}

const CategoryItem: React.SFC<Props> = props => {
	const { title, subtitle, theme, color, image, imageAlt } = props;
	return (
		<Box
			mr={2}
			css={css`
				background-color: ${theme.colors.white};
				border-radius: 1.4px;
				height: 181.3px;
				margin-top: 10px;
				max-width: 384px;
				position: relative;
				width: 100%;
			`}
		>
			<Flex
				css={css`
					align-items: center;
					margin: 0 -15px;
					@media (max-width: ${breakpoints['sm']}) {
						flex-wrap: wrap;
						justify-content: space-between;
					}
				`}
			>
				<Col
					order={1}
					width={[1 / 3]}
					css={css`
						align-items: center;
						display: flex;
					`}
				>
					<Box
						css={css`
							background-color: ${color};
							height: 96px;
							position: absolute;
							top: 50%;
							transform: translateY(-50%);
							width: 135px;
						`}
					>
						<Image src={image} alt={imageAlt} />
					</Box>
				</Col>
				<Col
					order={2}
					css={css`
						align-items: center;
						display: flex;
					`}
				>
					<CtaBox>
						<Title>
							{title} <br />
							<TitleBold>{subtitle}</TitleBold>
						</Title>
						<Button
							css={css`
								margin-top: 8px;
							`}
							sm
						>
							Click here
						</Button>
					</CtaBox>
				</Col>
			</Flex>
		</Box>
	);
};

const Image = styled.img`
	left: 21px;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
`;

const Title = styled.h2`
	color: ${(props: any) => props.theme.colors.black};
	font-size: 22px;
	font-weight: 300;
	line-height: 27px;
	text-transform: uppercase;
`;

const TitleBold = styled.span`
	font-weight: 900;
`;

const CtaBox: Box = styled(Box)`
	label: CtaBox;
	padding-left: 32px;
	padding-top: 40px;
	width: 100%;
`;

export default withTheme(CategoryItem);
