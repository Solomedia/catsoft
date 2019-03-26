import React from 'react';
import { withTheme } from 'emotion-theming';
import { Box } from '@rebass/grid/emotion';

import { Container, Row } from 'lib/ui';
import NavItem from './nav-item';
import styled, { ThemeProps } from 'lib/theme';

const Wrapper = styled(Container)`
  label: wrapper;
  max-width: 931px;
`;

interface Props {
  data: any;
  theme: ThemeProps;
}

const Nav: React.SFC<Props> = ({ data: category, theme }) => {
  const NavItems = () => {
    const comparisons = {
      name: 'comparisons',
      children_data: [],
      id: 'compare'
    };
    const categories = category.children_data.map(product => {
      comparisons.children_data.push({
        id: product.id,
        name: product.name,
        parent_id: comparisons.id
      });
      return <NavItem key={product.id} product={product} />;
    });

    categories.push(<NavItem key={comparisons.id} product={comparisons} />);

    return categories;
  };

  return (
    <Box bg={[theme.colors.secondary, theme.colors.primary]}>
      <Wrapper>
        <Row justifyContent="space-between">{category && NavItems()}</Row>
      </Wrapper>
    </Box>
  );
};

export default withTheme(Nav);
