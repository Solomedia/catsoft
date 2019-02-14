import React from 'react';
import Slider from 'react-slick';
import { css } from '@emotion/core';
import { Box } from '@rebass/grid/emotion';
// Local modules
import { breakpoints } from 'lib/theme';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <Arrow direction="right" />,
  prevArrow: <Arrow />,
  appendDots: dots => (
    <Box
      css={css`
        bottom: -60px;
      `}
    >
      <ul
        css={css`
          li {
            height: auto;
            width: 50px;
            button:before {
              content: ' ';
              height: 4px;
              width: 50px;
              background-color: #5c56c8;
            }
          }
        `}
      >
        {dots}
      </ul>
    </Box>
  )
};

function Arrow({ onClick, direction }: any) {
  return (
    <i
      className="material-icons"
      css={css`
        color: #6d5cff;
        font-size: 60px;
        position: absolute;
        top: 50%;
        left: ${direction !== 'right' ? '-47px' : 'auto'};
        right: ${direction !== 'right' ? 'auto' : '-47px'};
        transform: translateY(-50%);
      `}
      onClick={onClick}
    >
      {direction !== 'right' ? 'chevron_left' : 'chevron_right'}
    </i>
  );
}

const SliderWithDashes = ({ children }) => (
  <Slider
    {...sliderSettings}
    css={css`
      margin-top: 100px;
      @media (max-width: ${breakpoints['sm']}) {
        display: none;
      }
    `}
  >
    {children}
  </Slider>
);

export default SliderWithDashes;
