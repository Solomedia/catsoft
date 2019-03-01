import React from 'react';
// import { css } from '@emotion/core';
// import { Flex } from '@rebass/grid/emotion';
// import styled from 'lib/theme';
import { Text } from 'lib/ui';

interface Category {
  name: string;
}

interface Props {
  categoryToCompare: Category;
}

const ProductCompare: React.SFC<Props> = ({ categoryToCompare }) => {
  const name = categoryToCompare && categoryToCompare.name;
  return (
    <>
      <Text as="h1" mt={8} fontSize={10} weight={300} align="center">
        Compare {name} Products
      </Text>
      <Text mt={3} weight={500} align="center">
        Select the softwares below that you want to compare. You can add up to 4
        softwares.
      </Text>
    </>
  );
};

export default ProductCompare;
