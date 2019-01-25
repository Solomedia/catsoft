import React from 'react';
import gql from 'graphql-tag';
import { withTheme } from 'emotion-theming';
import { graphql } from 'react-apollo';
import { css } from '@emotion/core';
import { Box, Flex } from '@rebass/grid/emotion';
import { Container, Col } from '../../utils/ui';
import CategoryItem from './categoryItem';

import styled, { ThemeProps, breakpoints } from '../../core/theme';
import * as i18Next from '../../i18n';
import Carousel from 'nuka-carousel';

const { withNamespaces } = i18Next;

const Title = styled.p`
	color: '#000032';
	font-size: 28px;
	font-weight: 300;
	line-height: 32px;
	margin-bottom: 24px;
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
					background-color: ${theme.colors.containerBg2};
					padding: 100px 0;
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
					<Flex
						css={css`
							align-items: center;
							margin: 0 -15px;
							@media (max-width: ${breakpoints['sm']}) {
								flex-wrap: wrap;
								justify-content: space-between;
							}
						`}
					>
						<Col
							order={1}
							width={[1 / 3]}
							css={css`
								display: flex;
								align-items: center;
							`}
						>
							<CategoryItem
								title="Package"
								subtitle="Collection"
								image="https://via.placeholder.com/98x144"
								imageAlt="placeholder"
								color="#ffc000"
							/>
						</Col>
						<Col
							order={2}
							width={[1 / 3]}
							css={css`
								display: flex;
								align-items: center;
							`}
						>
							<CategoryItem
								title="Package"
								subtitle="Collection"
								image="https://via.placeholder.com/98x144"
								imageAlt="placeholder"
								color="#B2D043"
							/>
						</Col>
						<Col
							order={3}
							width={[1 / 3]}
							css={css`
								display: flex;
								align-items: center;
							`}
						>
							<CategoryItem
								title="Package"
								subtitle="Collection"
								image="https://via.placeholder.com/98x144"
								imageAlt="placeholder"
								color="#ff766b"
							/>
						</Col>
					</Flex>
					<Carousel>
						<CategoryItem
							title="Package"
							subtitle="Collection"
							image="https://via.placeholder.com/98x144"
							imageAlt="placeholder"
							color="#ffc000"
						/>
						<CategoryItem
							title="Package"
							subtitle="Collection"
							image="https://via.placeholder.com/98x144"
							imageAlt="placeholder"
							color="#B2D043"
						/>
						<CategoryItem
							title="Package"
							subtitle="Collection"
							image="https://via.placeholder.com/98x144"
							imageAlt="placeholder"
							color="#ff766b"
						/>
					</Carousel>
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
