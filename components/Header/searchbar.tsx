import { css } from '@emotion/core';
import styled from 'lib/theme';
import { SearchInput } from 'lib/ui';

const Icon = styled.i`
  color: #7f71ff;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;

const SearchBar = () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <SearchInput width={1} placeholder="Search the entire store here" />
      <Icon className="material-icons">search</Icon>
    </div>
  );
};

export default SearchBar;
