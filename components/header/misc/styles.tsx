import styled from '../../../core/theme';
import { Row } from '../../../utils/ui';

export const RowAlign: any = styled(Row)`
	text-align: center;
`;

export const A: any = styled.a`
	color: white;
	font-size: 12px;
	text-decoration: none;
	&:after {
		content: '|';
		margin: ${(props: any) => (props.separator ? '0 10px' : '0')};
		color: ${(props: any) => (props.separator ? '' : 'transparent')};
	}
`;

export const Text = styled.p`
	color: white;
	font-size: 12px;
	display: inline;
`;
