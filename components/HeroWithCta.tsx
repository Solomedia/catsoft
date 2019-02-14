import { Button, Row } from 'utils/ui';
import { Box } from '@rebass/grid/emotion';
import styled, { breakpoints, theme } from 'lib/theme';

const HeroWithCta = () => (
	<Wrapper>
		<CtaBox>
			<Title>BLACK FRIDAY SALES ALL MICROSOFT APPS</Title>
			<Text>
				Lorem ipsum dolor sit amet, consect etur adipiscing elit. Nunc ac mattis
				justo. Pellentesque malesuada maximus dapibus. Nam et purus mi.
			</Text>
			<Button my={2} mr={2} lg>
				Click here
			</Button>
		</CtaBox>
		<ImgStyled src="https://via.placeholder.com/755x486" />
	</Wrapper>
);

const Title = styled.h2`
	font-size: ${props => props.theme.fontSizes[7] + 'px'};
	@media (min-width: ${breakpoints['sm']}) {
		font-size: ${props => props.theme.fontSizes[10] + 'px'};
		line-height: 54px;
	}
`;

const Text = styled.p`
	font-weight: 500;
	color: ${theme.colors.waterloo};
	margin-top: 10px;
	line-height: 22px;
	max-width: 282px;
`;

const CtaBox: Box = styled(Box)`
	label: CtaBox;
	background-color: #fff;
	max-width: 93%;
	padding: 12px 10px 0 0;
	margin-top: -60px;
	z-index: 1;
	width: 100%;
	@media (min-width: ${breakpoints['sm']}) {
		max-width: 587px;
		margin-top: 0;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		background-color: transparent;
		z-index: 0;
	}
`;

const Wrapper: Box = styled(Row)`
	margin: 20px 0 0;
	flex-direction: column-reverse;
	@media (min-width: ${breakpoints['sm']}) {
		position: relative;
		justify-content: flex-end;
	}
`;

const ImgStyled = styled.img`
	max-width: 755px;
	width: 100%;
`;

export default HeroWithCta;
