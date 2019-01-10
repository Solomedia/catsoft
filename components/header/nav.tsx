import Link from 'next/link';
import { graphql } from 'react-apollo';
import { css } from '@emotion/core';
import { Flex } from '@rebass/grid/emotion';
import { withTheme } from 'emotion-theming';
import gql from 'graphql-tag';

import { Col, Container, Row } from '../../utils/ui';
import { Box } from '@rebass/grid/emotion';
import styled, { breakpoints } from '../../core/theme';

const A = styled.a`
	color: #fff;
	font-weight: 700;
	font-size: 28px;
	@media (min-width: ${breakpoints['sm']}) {
		font-size: 14px;
	}
`;

const LinkIcon = styled.i`
	color: #d4d5e2;
	margin-left: 8px;
	margin-top: 5px;
	font-size: 18px;
	@media (min-width: ${breakpoints['sm']}) {
		margin-left: 13px;
		margin-top: auto;
		font-size: 13px;
	}
`;

const Wrapper = styled(Container)`
	label: wrapper;
	max-width: 931px;
`;

const Nav = props => {
	const {
		data: { category },
		theme
	} = props;

	const NavItems =
		category &&
		category.children.map(item => (
			<Col
				key={item.id}
				css={css`
					@media (max-width: ${breakpoints['sm']}) {
						margin-top: 10px;
					}
				`}
			>
				<Link prefetch href="/">
					<Flex alignItems="center" justifyContent="center">
						<A href="/">{item.name}</A>
						<LinkIcon className="fa fa-chevron-down" />
					</Flex>
				</Link>
			</Col>
		));

	return (
		<Box bg={theme.colors.secondary} py={16}>
			<Wrapper>
				<Row justifyContent="space-between">{NavItems}</Row>
			</Wrapper>
		</Box>
	);
};

const CATEGORIES_QUERY = gql`
	query category {
		category(id: 2) {
			children {
				name
				id
				position
			}
		}
	}
`;

export default graphql(CATEGORIES_QUERY)(withTheme(Nav));
