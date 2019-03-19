import React from 'react';
import Dropdown from 'react-dropdown';
import styled from 'lib/theme';
import { css } from '@emotion/core';

interface State {
  selected: string;
}

interface Props {
  selectPosition: number;
  options: string[];
  onSelectChange: (selectPosition: number, option: string) => void;
  placeholder: string;
}

class Select extends React.Component<Props, State> {
  public state = {
    selected: ''
  };

  private onSelect = option => {
    const { selectPosition, onSelectChange } = this.props;
    this.setState({ selected: option });
    onSelectChange(selectPosition, option.value);
  };

  public render() {
    const { options, placeholder } = this.props;
    const defaultOption = this.state.selected;
    const arrowClosed = (
      <Icon
        className="material-icons"
        css={css`
          transform: ${!defaultOption ? 'rotate(45deg)' : 'none'};
          font-size: ${!defaultOption ? '18px' : '24px'};
        `}
      >
        {defaultOption ? 'expand_more' : 'close'}
      </Icon>
    );
    const arrowOpen = <Icon className="material-icons">expand_less</Icon>;

    return (
      <DropdownStyled
        options={options}
        onChange={this.onSelect}
        value={defaultOption}
        arrowClosed={arrowClosed}
        arrowOpen={arrowOpen}
        placeholder={placeholder}
      />
    );
  }
}

const DropdownStyled = styled(Dropdown)`
  height: 44px;
  width: 100%;
  border: ${({ value }) => (value ? '0' : '1px solid #d4d5e2')};
  border-bottom: 1px solid #dbe1e7;
  background-color: #fff;
  position: relative;
  &:hover {
    cursor: pointer;
  }

  .Dropdown-control {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    padding: ${({ value }) => (value ? '16px 4px 16px 0' : '16px')};
  }
  .Dropdown-placeholder {
    color: ${({ value }) => (value ? '#212B36' : '#6d5cff')};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .Dropdown-menu {
    background-color: #fff;
    border: 1px solid #d4d5e2;
    width: 100%;
    max-height: 316px;
    overflow: scroll;
    padding: 0 10px 10px;
  }
  .Dropdown-option {
    color: #727272;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    margin-top: 10px;
  }
`;

const Icon = styled.i`
  color: #6d5cff;
  font-weight: bold;
`;

export default Select;
