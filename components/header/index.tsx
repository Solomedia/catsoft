import React from 'react';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import { css } from '@emotion/core';
import styled from '../../core/theme';
import TopNav from './top-nav';
import * as i18Next from '../../i18n';
import SearchBar from './searchbar';
import { Row, Col, Container } from '../../utils/ui';
import { ThemeProps } from '../../core/theme';
import { Box } from '@rebass/grid/emotion';
import Nav from './nav';
import Cta from './cta';

const { withNamespaces } = i18Next;

const Logo = styled.a`
	font-size: 30px;
	color: white;
	font-weight: 900;
`;

const Hr = styled.hr`
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
			<Box bg={theme.colors.primary}>
				<TopNav t={t} />
				<Hr />
				<Container
					css={css`
						padding: 17px 15px 24px;
					`}
				>
					<Row
						css={css`
							align-items: center;
						`}
					>
						<Col>
							<Link href="/">
								<Logo>CATSOFT</Logo>
							</Link>
						</Col>
						<Col
							width={1}
							css={css`
								max-width: 664px;
							`}
						>
							<SearchBar />
							<Cta/>
						</Col>
					</Row>
				</Container>
				<Nav />
			</Box>
		);
	}
}

export default withNamespaces('header')(withTheme(Header));
