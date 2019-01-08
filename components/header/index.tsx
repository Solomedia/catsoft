import React from 'react';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import { css } from '@emotion/core';
import TopNav from './top-nav';
import * as i18Next from '../../i18n';
import SearchBar from './searchbar';
import { Row, Col, Container } from '../../utils/ui';
import { ThemeProps } from '../../core/theme';
import { Box } from '@rebass/grid/emotion';

const { withNamespaces } = i18Next;

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
				<Box
					css={css`
						padding: 17px 0 27px;
						border-top: 1px solid #6354ea;
					`}
				>
					<Container>
						<Row>
							<Col width={1 / 3}>
								<Link href="/">
									<a
										css={css`
											font-size: 30px;
											color: white;
											font-weight: 900;
										`}
									>
										CATSOFT
									</a>
								</Link>
							</Col>
							<Col width={1 / 3}>
								<SearchBar />
							</Col>
							<Col width={1 / 3}>Setting</Col>
						</Row>
					</Container>
				</Box>
			</Box>
		);
	}
}

export default withNamespaces('header')(withTheme(Header));
