import React from 'react';
import { Text } from 'lib/ui';

interface Props {
  categoryName: string;
}

const Title: React.SFC<Props> = ({ categoryName }) => (
  <>
    <Text as="h1" mt={8} fontSize={10} weight={300} align="center">
      Compare {categoryName} Products
    </Text>
    <Text mt={3} weight={500} align="center">
      Select the softwares below that you want to compare. You can add up to 4
      softwares.
    </Text>
  </>
);

export default Title;
