import React from 'react';
import { Box } from '@rebass/grid/emotion';
import styled, { theme, breakpoints } from 'lib/theme';

const {
  colors: { containerBg2 }
} = theme;

function createMarkup(template) {
  return { __html: template };
}

interface Props {
  template: string;
  mt?: number | number[] | string | string[];
}

const ProductDescription: React.SFC<Props> = ({ template, mt }) => (
  <React.Fragment>
    {template ? (
      <Box mt={mt}>
        <TemplateWrapper dangerouslySetInnerHTML={createMarkup(template)} />
      </Box>
    ) : (
      <div />
    )}
  </React.Fragment>
);

const TemplateWrapper = styled.div`
  label: TemplateWrapper;
  background-color: ${containerBg2};
  padding: 18px 15px;
  ul {
    display: flex;
    flex-direction: column;
    list-style: disc;
    padding: 0 15px;
    @media (min-width: ${breakpoints['sm']}) {
      flex-direction: row;
      padding: 0;
      list-style: none;
    }
    li {
      color: #000032;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      position: relative;
      text-align: left;
      @media (min-width: ${breakpoints['sm']}) {
        text-align: center;
        margin: 0 15px;
        padding: 0 15px;
      }
      &::after {
        background-color: #dbe1e7;
        content: '';
        height: 30px;
        position: absolute;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        @media (max-width: ${breakpoints['sm']}) {
          display: none;
        }
      }
    }
    li:last-child {
      &::after {
        display: none;
      }
    }
  }
`;

export default ProductDescription;
