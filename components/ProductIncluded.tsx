import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import { Row, Col } from 'utils/ui';
// Local modules
import styled, { breakpoints } from 'lib/theme';
import data from 'static/mockdata.json';

const ProductIncluded = () => {
    const { products_included } = data;
    return (
    <Box 
      css={css`
        margin-top: 25px;
      `}
    >
        <Row>
            <Col width={[1, 2 / 5]}>
                <Image src={products_included.image}/>
            </Col>
            <Col width={[1]}>
                <Title>
                    {products_included.title}
                </Title>
                <Text>
                    {products_included.text}
                </Text>
            </Col>
        </Row>
    </Box>
    );
};

const Image = styled.img`
  max-height: 192px;
  height: 100%;
  width: 100%;
  @media (max-width: ${breakpoints['sm']}) {
    height: 84px;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 300;
  line-height: 32px;
  margin-bottom: 15px;
  @media (max-width: ${breakpoints['sm']}) {
    margin-top: 17px;
  }
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;

export default ProductIncluded;
