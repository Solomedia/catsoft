import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';

// Locals
import styled, { breakpoints } from 'lib/theme';
import CompareEditionSelect from './CompareEditionSelect';
import data from 'static/mockdata.json';

const { description, options } = data.compareEditions;

const CompareEditions: React.SFC = () => {
  return (
    <Box
      css={css`
        margin-top: 48px;

        @media (min-width: ${breakpoints['md']}) {
          margin-top: 64px;
        }
      `}
    >
      <CompareEditionSelect options={options} />
      <Description>{description}</Description>
    </Box>
  );
};

const Description = styled.p`
  font-weight: 500;
  margin-top: 13px;
  line-height: 22px;
  @media (min-width: ${breakpoints['md']}) {
    margin-top: 24px;
  }
`;

export default CompareEditions;
