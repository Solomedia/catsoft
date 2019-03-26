import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import { Text } from 'lib/ui';
import { colors } from 'lib/theme';

const { textColor2, textColor3 } = colors;

interface Platform {
  name: string;
  description: string;
}

interface Props {
  platform: Platform;
}

const Platform: React.SFC<Props> = ({ platform: { name, description } }) => (
  <Box
    css={css`
      text-align: center;
    `}
  >
    <img src={'https://via.placeholder.com/42x42'} />
    <Text mt={3} fontSize={1} weight={500} color={textColor3}>
      {name}
    </Text>
    <Text
      mt={3}
      fontSize={1}
      weight={500}
      color={textColor2}
      css={css`
        line-height: 22px;
        text-align: left;
      `}
    >
      {description}
    </Text>
  </Box>
);

export default Platform;
