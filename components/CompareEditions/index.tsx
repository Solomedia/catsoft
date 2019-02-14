import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';

import styled, { breakpoints } from 'lib/theme';

import CompareEditionSelect from './CompareEditionSelect';

const CompareEditions: React.SFC = () => {
  return (
    <Box
      css={css`
        margin-top: 64px;
      `}
    >
      <CompareEditionSelect options={['Office 2016', 'Office 2013']} />
      <Description>
        Microsoft Office is a suite of desktop productivity applications that is
        designed specifically to be used for office or business use. Microsoft
        Office is available in 35 different languages and is supported by
        Windows and Mac. It mainly consists of Word, Excel, PowerPoint, Access,
        OneNote, Outlook and Publisher applications.
      </Description>
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
