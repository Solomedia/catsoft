import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import Router from 'next/router';
// Locals
import { breakpoints } from 'lib/theme';
import { RadioFilterList } from './';

interface State {
  categoryId: string;
}

interface Props {
  versionCategories: any[];
  queryId: string;
}

class CategoriesSideBar extends React.Component<Props, State> {
  public state = {
    categoryId: this.props.queryId
  };

  public static getDerivedStateFromProps(nextProps) {
    return {
      categoryId: nextProps.queryId
    };
  }

  public onSelectProduct = ({ id, parentId }) => {
    this.setState({
      categoryId: id
    });

    Router.push(`/products?id=${id}&parent_id=${parentId}`);
  };

  public render() {
    const { categoryId } = this.state;
    const { versionCategories } = this.props;
    return (
      <Box
        css={css`
          border-right: 1px solid #efefef;
          padding-right: 100px;
          max-width: 291px;
          @media (max-width: ${breakpoints['sm']}) {
            display: none;
          }
        `}
      >
        <h3
          css={css`
            color: #212b36;
            font-size: 28px;
            font-weight: 300;
          `}
        >
          Categories
        </h3>

        <Box mt={5}>
          <RadioFilterList
            title="Versions"
            options={versionCategories}
            onChangehandler={this.onSelectProduct}
            selectedOption={categoryId}
          />
        </Box>
      </Box>
    );
  }
}

export default CategoriesSideBar;
