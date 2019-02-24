import React from 'react';
import { css } from '@emotion/core';
import { Flex } from '@rebass/grid/emotion';
import styled from 'lib/theme';
import { Text, Button } from 'lib/ui';

interface Props {
  name: string;
  price: number;
  stars: number;
}

const ProductTitle: React.SFC<Props> = props => {
  const { name, price, stars } = props;

  return (
    <>
      <Text as="span" weight={500}>
        {name.replace(/Microsoft Office |[0-9]/g, '')}
      </Text>
      <Text fontSize={9} weight={600}>
        ${price}
      </Text>
      {RenderStars(stars)}
      <Button
        px="4px"
        fontSize="10px"
        mt={1}
        width="143px"
        css={css`
          min-height: 23px;
          height: 23px;
        `}
      >
        buy now
      </Button>
    </>
  );
};

const RenderStars = stars => {
  const starIcons = [];
  for (let x = 0; x < stars; x++) {
    starIcons.push(
      <StartIcon key={x} className="material-icons">
        star_rate
      </StartIcon>
    );
  }
  return <Flex>{starIcons}</Flex>;
};

const StartIcon = styled.i`
  label: StartIcon;
  color: #ffc000;
  margin-right: 5px;
  width: 13px;
  font-size: 14px;
`;

export default ProductTitle;
