import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import Dropdown from 'react-dropdown';

// Locals
import styled, { breakpoints } from 'lib/theme';

interface State {
  selectedOption: string;
}

interface Props {
  options: string[];
}

class CompareEditionSelect extends React.Component<Props, State> {
  public state = {
    selectedOption: ''
  };

  public onChangehandler = val =>
    this.setState({
      selectedOption: val
    });

  public render() {
    const { options } = this.props;
    const { selectedOption } = this.state;
    const arrowClosed = <Icon className="material-icons">arrow_drop_down</Icon>;
    const arrowOpen = <Icon className="material-icons">arrow_drop_up</Icon>;

    return (
      <Box
        css={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <Text>Compare</Text>
        <Box>
          <DropdownStyled
            options={options}
            onChange={this.onChangehandler}
            placeholder={options[0]}
            value={selectedOption}
            arrowClosed={arrowClosed}
            arrowOpen={arrowOpen}
          />
        </Box>

        <Text>Editions for Windows</Text>
      </Box>
    );
  }
}

const DropdownStyled = styled(Dropdown)`
  height: 32px;
  width: 174px;
  background-color: #fff;
  padding-left: 10px;
  cursor: pointer;

  @media (min-width: ${breakpoints['md']}) {
    width: 195px;
  }

  .Dropdown-control {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
  .Dropdown-placeholder {
    color: #212b36;
    font-size: 24px;
    font-weight: 600;
    @media (min-width: ${breakpoints['md']}) {
      font-size: 28px;
    }
  }
  .Dropdown-menu {
    background-color: #fff;
    border: 1px solid #d4d5e2;
    width: 174px;
    margin-left: -11px;
    padding: 0 10px 10px;
    z-index: 2;
    position: relative;

    @media (min-width: ${breakpoints['md']}) {
      width: 195px;
    }
  }
  .Dropdown-option {
    color: #727272;
    font-size: 14px;
    line-height: 18px;
    margin-top: 10px;
  }
`;

const Text = styled.span`
  color: #212b36;
  font-size: 24px;
  font-weight: 300;
  @media (min-width: ${breakpoints['md']}) {
    font-size: 28px;
  }
`;

const Icon = styled.i`
  color: #6d5cff;
  font-size: 26px;
`;

export default CompareEditionSelect;
