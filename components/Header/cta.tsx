import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import styled, { breakpoints } from '../../core/theme';
import Link from 'next/link';

const IconBox: Box = styled(Box)`
	border: 1px solid #fff;
	border-radius: 50%;
	height: 33px;
	padding-top: ${(props: any) =>
		props.ctaType !== 'shopping_cart' ? '3px' : '6px'};
	padding-left: ${(props: any) =>
		props.ctaType !== 'shopping_cart' ? '3.50px' : '6.50px'};
	width: 33px;
	i {
		color: #fff;
		font-size: ${(props: any) =>
			props.ctaType !== 'shopping_cart' ? '24px' : '19px'};
	}
`;

const TextBox = styled.div`
	@media (max-width: ${breakpoints['sm']}) {
		display: none;
	}
	margin: 0 5px;
	max-width: 85px;
`;

const Text = styled.p`
	color: #fff;
	font-size: 12px;
`;

const CartItems = styled.p`
	color: #dcdde8;
	font-size: 12px;
`;

interface Props {
	ctaType: string;
	inCard?: number;
	text?: string;
}

const Cta: React.SFC<Props> = props => {
	const { ctaType, inCard, text } = props;
	return (
		<Link href="/">
			<a>
				<Flex alignItems="center">
					<IconBox ctaType={ctaType}>
						<i className="material-icons">{ctaType}</i>
					</IconBox>
					<TextBox>
						<Text>{text}</Text>
						{ctaType === 'shopping_cart' && (
							<CartItems> {inCard} items</CartItems>
						)}
					</TextBox>
				</Flex>
			</a>
		</Link>
	);
};

export default Cta;
