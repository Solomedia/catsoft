import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';

// Locals
import { Text } from 'lib/ui';
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
      <Box mt={[9, 11]}>
        <CompareEditionsSelect
          options={options}
          selectedOption={this.state.selectedOption}
          onChange={this.onChangehandler}
        />
        <Text
          weight={500}
          mt={[2, 4]}
          css={css`
            line-height: 22px;
          `}
        >
          {description}
        </Text>
        <CompareEditionsTable
          data={this.state.tableData}
          featureList={featureList}
        />
      </Box>
    );
  }
}

export default CompareEditions;
