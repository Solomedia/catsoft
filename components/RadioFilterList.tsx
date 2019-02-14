import { Box } from '@rebass/grid/emotion';
import styled from '../lib/theme';

interface Option {
	value: string;
	TextLabel: string;
}

interface Props {
	options: Option[];
	onChangehandler: (arg: any) => any;
	selectedOption: string;
	title: string;
}

const RadioFilterList: React.SFC<Props> = ({
	options,
	onChangehandler,
	selectedOption,
	title
}) => (
	<Box>
		<Title>{title}</Title>
		<Box>
			{options &&
				options.map(({ value, TextLabel }, i) => (
					<Box key={i} mt={2}>
						<LabelStyled active={selectedOption === value}>
							<InputStyled
								type="radio"
								value={value}
								checked={selectedOption === value}
								onChange={() => onChangehandler(value)}
							/>
							{TextLabel}
						</LabelStyled>
					</Box>
				))}
		</Box>
	</Box>
);

const InputStyled = styled.input`
	visibility: hidden;
	position: absolute;
	min-height: 50px;
	width: 100%;
`;

const LabelStyled: any = styled.label`
	background: ${({ active, theme }: any) =>
		active ? theme.colors.secondary : 'transparent'};
	border-radius: 10px;
	color: ${({ active }: any) => (active ? '#fff' : '#000032')};
	font-size: 14px;
	font-weight: 500;
	padding: 5px;
	position: relative;
`;

const Title = styled.label`
	color: #d4d5e2;
	font-size: 14px;
`;

export default RadioFilterList;
