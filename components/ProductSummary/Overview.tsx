import React from 'react';
import { css } from '@emotion/core';
import { Box } from '@rebass/grid/emotion';

interface OverviewData {
  mainText: string;
}

interface Props {
  data: OverviewData;
}

const Overview: React.SFC<Props> = props => {
  const { mainText } = props.data;

  return (
    <Box
      css={css`
        p {
          line-height: 22px;
          margin-bottom: 15px;
        }
      `}
      fontSize={2}
      dangerouslySetInnerHTML={{ __html: mainText }}
    />
  );
};

export default Overview;
