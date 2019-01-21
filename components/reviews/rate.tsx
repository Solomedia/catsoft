import styled from '../../core/theme';
import { Box } from '@rebass/grid/emotion';
// Local modules
import { Text } from '../../utils/ui';
import { breakpoints } from '../../core/theme';

const Rating = () => {
	return (
		<Wrapper>
			<img src="https://via.placeholder.com/40x40" />
			<TextName>Reviwer</TextName>
			<TextRate>9.2</TextRate>
			<TextCount>
				OUT OF 10 <br /> (3800 + Reviews)
			</TextCount>
		</Wrapper>
	);
};

const Wrapper = styled(Box)`
	align-items: center;
	background-color: #fff;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	height: 156px;
	justify-content: center;
	width: 156px;

	@media (min-width: ${breakpoints['sm']}) {
		height: 195px;
		width: 195px;
	}
`;

const TextName = styled(Text)`
	color: #000;
	font-weight: 600;
	margin-top: 5px;
	@media (min-width: ${breakpoints['sm']}) {
		font-size: 16px;
	}
`;

const TextRate = styled(TextName)`
	font-size: 18px;
	margin-top: 0;
	@media (min-width: ${breakpoints['sm']}) {
		font-size: 26px;
	}
`;

const TextCount = styled(Text)`
	color: ${props => props.theme.colors.waterloo};
	font-size: 11px;
	font-weight: 300;
	text-align: center;
	@media (min-width: ${breakpoints['sm']}) {
		font-size: 13px;
	}
`;

export default Rating;
