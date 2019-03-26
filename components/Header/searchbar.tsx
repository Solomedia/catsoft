import React from 'react';
import { css } from '@emotion/core';
import styled from 'lib/theme';
import { SearchInput } from 'lib/ui';
import Router from 'next/router';

const Icon = styled.i`
  color: #7f71ff;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
  }
`;

class SearchBar extends React.Component {
  public state = {
    searchValue: ''
  };
  private searchHadler = async (e, searchBtn = false) => {
    if (e.key === 'Enter' || searchBtn)
      Router.push(`/search?value=${this.state.searchValue}`);
  };

  public render() {
    const { searchValue } = this.state;

    return (
      <div
        css={css`
          position: relative;
        `}
      >
        <SearchInput
          onKeyPress={e => this.searchHadler(e)}
          onChange={e => this.setState({ searchValue: e.target.value })}
          width={1}
          placeholder="Search the entire store here"
          value={searchValue}
        />
        <Icon
          onClick={e => this.searchHadler(e, true)}
          className="material-icons"
        >
          search
        </Icon>
      </div>
    );
  }
}

export default SearchBar;
