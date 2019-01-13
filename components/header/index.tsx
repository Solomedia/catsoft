import React from 'react';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import { css } from '@emotion/core';
import styled from '../../core/theme';
import TopNav from './top-nav';
import * as i18Next from '../../i18n';
import SearchBar from './searchbar';
import { Col, Container } from '../../utils/ui';
import { ThemeProps, breakpoints } from '../../core/theme';
import { Box, Flex } from '@rebass/grid/emotion';
import Nav from './nav';
import Cta from './cta';

const { withNamespaces } = i18Next;

const Logo = styled.a`
	font-size: 30px;
	color: white;
	font-weight: 900;
`;

const Hr = styled.hr`
	@media (max-width: ${breakpoints['sm']}) {
		display: none;
	}
	background-color: #6354ea;
	border: 0;
	width: 100%;
	height: 1px;
`;

interface Props {
	t: (arg: string) => string;
	theme: ThemeProps;
}

class Header extends React.Component<Props> {
	public render() {
		const { t, theme } = this.props;

		return (
			<Box
				css={css`
					@media (max-width: ${breakpoints['sm']}) {
						display: flex;
						flex-direction: column;
					}
				`}
				bg={theme.colors.secondary}
			>
				<Box order={3}>
					<TopNav t={t} />
				</Box>
				<Hr />
				<Box order={1}>
					<Container
						css={css`
							padding: 17px 15px 24px;
						`}
					>
						<Flex
							css={css`
								@media (max-width: ${breakpoints['sm']}) {
									flex-wrap: wrap;
								}
								align-items: center;
							`}
						>
							<Col order={1} width={[1 / 2, 1 / 5]}>
								<Link href="/">
									<Logo>CATSOFT</Logo>
								</Link>
							</Col>
							<Col
								order={[3, 2]}
								width={1}
								css={css`
									max-width: 694px;
								`}
							>
								<SearchBar />
							</Col>
							<Col
								order={[2, 3]}
								css={css`
									display: flex;
									justify-content: space-around;
									width: 50%;
									@media (min-width: ${breakpoints['sm']}) {
										min-width: 260px;
										width: 40%;
									}
								`}
							>
								<Cta ctaType="persone" text="Hello, log in or sign up" />
								<Cta text="Your cart" ctaType="shopping_cart" inCard={0} />
							</Col>
						</Flex>
					</Container>
				</Box>
				<Box order={2}>
					<Nav />
				</Box>
			</Box>
		);
	}
}

export default withNamespaces('header')(withTheme(Header));
