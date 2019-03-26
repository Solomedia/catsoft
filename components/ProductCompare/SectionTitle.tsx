import React from 'react';
import { css } from '@emotion/core';
import styled from 'lib/theme';
import { Text } from 'lib/ui';

interface Props {
  children: string;
}

const SectionTitle: React.SFC<Props> = ({ children }) => (
  <>
    <Text
      stlye={css`
        line-height: 32px;
      `}
      as="h2"
      mt={7}
      mb={3}
      fontSize={8}
      weight={300}
    >
      {children}
    </Text>
    <Hr />
  </>
);

const Hr = styled.hr`
  border: 0;
  background-color: #eeeffb;
  height: 1px;
  width: 100%;
`;

export default SectionTitle;
