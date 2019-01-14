import React from 'react';
import gql from 'graphql-tag';
import { graphql, DataValue } from 'react-apollo';
import { withTheme } from 'emotion-theming';
import { Box } from '@rebass/grid/emotion';

import { Container, Row } from '../../utils/ui';
import NavItem from './nav-item';
import styled, { ThemeProps } from '../../core/theme';

const Wrapper = styled(Container)`
	label: wrapper;
	max-width: 931px;
	padding: 0 15px;
`;

interface Props {
	data: DataValue<{ category }>;
	theme: ThemeProps;
}

const Nav: React.SFC<Props> = props => {
	const {
		data: { category },
		theme
	} = props;

	const NavItems =
		category &&
		category.children.map(product => (
			<NavItem key={product.id} product={product} />
		));

	return (
		<Box bg={[theme.colors.secondary, theme.colors.primary]}>
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
				products {
					items {
						name
						id
					}
				}
			}
		}
	}
`;

export default graphql(CATEGORIES_QUERY)(withTheme(Nav));
