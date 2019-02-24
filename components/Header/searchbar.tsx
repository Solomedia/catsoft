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

const SearchBar = () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <SearchInput
        onKeyPress={e => {
          if (e.key === 'Enter') Router.push('/search');
        }}
        width={1}
        placeholder="Search the entire store here"
      />
      <Icon onClick={() => Router.push('/search')} className="material-icons">
        search
      </Icon>
    </div>
  );
};

export default SearchBar;
