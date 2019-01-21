import React from 'react';
import gql from 'graphql-tag';
import { withTheme } from 'emotion-theming';
import { graphql } from 'react-apollo';
import { css } from '@emotion/core';
import { Box } from '@rebass/grid/emotion';
import { Container } from '../../utils/ui';
import CategoryItem from './categoryItem';

import styled, { ThemeProps, breakpoints } from '../../core/theme';
import * as i18Next from '../../i18n';

const { withNamespaces } = i18Next;

const Title = styled.p`
	color: '#000032';
	font-size: 28px;
	font-weight: 300;
	line-height: 32px;
`;

interface Props {
	t: (arg: string) => string;
	theme: ThemeProps;
}

class Category extends React.Component<Props> {
	public state = {
		displayMobileMenu: false
	};

	public render() {
		const { theme } = this.props;
		const { displayMobileMenu } = this.state;

		return (
			<Box
				css={css`
					background-color: ${theme.colors.whisper};
					@media (max-width: ${breakpoints['sm']}) {
						display: flex;
						flex-direction: column;
						min-height: ${displayMobileMenu ? '100vh' : 'auto'};
						padding-bottom: ${displayMobileMenu ? '100px' : 'auto'};
						position: relative;
					}
				`}
			>
				<Container>
					<Title>Shop by category</Title>
					<CategoryItem text="Holaa" />
				</Container>
			</Box>
		);
	}
}

// TODO: Fix CATEGORIES_QUERY calls once server CORS bug is fix
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

export default graphql(CATEGORIES_QUERY)(
	withNamespaces('header')(withTheme(Category))
);
