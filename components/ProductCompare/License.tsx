import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import styled from 'lib/theme';
import { Text } from 'lib/ui';

interface Props {
  license: string;
}

const License: React.SFC<Props> = ({ license }) => (
  <Box
    css={css`
      text-align: center;
    `}
  >
    <Text fontSize={8} weight={700}>
      {license === 'Personal' ? 1 : 2}
    </Text>
    <Text mt={2} fontSize={1} weight={500}>
      Instalation per product
    </Text>
    <Hr />
    <Text mt={4} fontSize={8} weight={700}>
      {license}
    </Text>
    <Text fontSize={1} weight={500}>
      use only
    </Text>
  </Box>
);

const Hr = styled.hr`
  border: 0;
  background-color: #dbe1e7;
  margin-top: 30px;
  height: 1px;
  width: 80px;
`;

export default License;
