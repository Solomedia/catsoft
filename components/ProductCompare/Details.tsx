import React from 'react';
import { css } from '@emotion/core';
import { Text } from 'lib/ui';
import styled, { colors } from 'lib/theme';

const { textColor2, textColor3 } = colors;

interface Props {
  productTitle: string;
  image?: string;
  description: string;
}

const Title: React.SFC<Props> = ({ productTitle, image, description }) => (
  <>
    <Image src={image || 'https://via.placeholder.com/234x252'} />
    <Text
      css={css`
        line-height: 19px;
      `}
      as="h4"
      mt={4}
      fontSize={2}
      weight={500}
      color={textColor3}
    >
      {productTitle}
    </Text>
    <Text
      css={css`
        line-height: 22px;
      `}
      as="h4"
      mt={3}
      fontSize={1}
      weight={500}
      color={textColor2}
    >
      {description}
    </Text>
  </>
);

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
export default Title;
