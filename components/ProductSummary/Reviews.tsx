import React from 'react';
import { Box } from '@rebass/grid/emotion';

interface Props {
  data: any;
}

const Reviews: React.SFC<Props> = props => {
  const { mainText } = props.data;

  return <Box fontSize={2} dangerouslySetInnerHTML={{ __html: mainText }} />;
};

export default Reviews;
