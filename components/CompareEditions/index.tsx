import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';

// Locals
import styled, { breakpoints } from 'lib/theme';
import CompareEditionsSelect from './CompareEditionsSelect';
import CompareEditionsTable from './CompareEditionsTable';
import data from 'static/mockdata.json';

// TODO: verify the data from the API
const { description, options, featureList } = data.compareEditions;

interface Product {
  id: number;
  name: string;
  price: number;
  stars: number;
  license_use: string;
  license_type: string;
  included_products: string[];
}

interface State {
  selectedOption: string;
  tableData: Product[];
}

class CompareEditions extends React.Component<{}, State> {
  public state = {
    selectedOption: '',
    tableData: []
  };

  public onChangehandler = selectedOption => {
    const releaseYear = selectedOption.value.split(' ')[1];
    const tableData = data.tableCategories.find(el => el.name === releaseYear)
      .products;

    this.setState({
      selectedOption,
      tableData
    });
  };

  public componentDidMount() {
    const tableData = data.tableCategories[0].products;
    this.setState({
      tableData
    });
  }

  public render() {
    return (
      <Box
        css={css`
          margin-top: 48px;

          @media (min-width: ${breakpoints['md']}) {
            margin-top: 64px;
          }
        `}
      >
        <CompareEditionsSelect
          options={options}
          selectedOption={this.state.selectedOption}
          onChange={this.onChangehandler}
        />
        <Description>{description}</Description>
        <CompareEditionsTable
          data={this.state.tableData}
          featureList={featureList}
        />
      </Box>
    );
  }
}

const Description = styled.p`
  font-weight: 500;
  margin-top: 13px;
  line-height: 22px;
  @media (min-width: ${breakpoints['md']}) {
    margin-top: 24px;
  }
`;

export default CompareEditions;
