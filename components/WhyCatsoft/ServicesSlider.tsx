import React from 'react';
import { Box } from '@rebass/grid/emotion';
// Local modules
import styled from 'lib/theme';
// TODO: fetch data from API.
import SliderWithDashes from '../../layouts/slider-with-dashes';
import Service from './Service';

const ReviewSlider = () => (
  <SliderWithDashes>
      <Box>
        <SliderItem>
            <Service image={'https://via.placeholder.com/228x228'} title={'24/7 Tech Support'} description={'We are here to help you with your order and installation every step of the way.'} />
        </SliderItem>
      </Box>
      <Box>
        <SliderItem>
            <Service image={'https://via.placeholder.com/228x228'} title={'24/7 Tech Support'} description={'We are here to help you with your order and installation every step of the way.'} />
        </SliderItem>
      </Box>
      <Box>
        <SliderItem>
            <Service image={'https://via.placeholder.com/228x228'} title={'24/7 Tech Support'} description={'We are here to help you with your order and installation every step of the way.'} />
        </SliderItem>
      </Box>
      <Box>
        <SliderItem>
            <Service image={'https://via.placeholder.com/228x228'} title={'24/7 Tech Support'} description={'We are here to help you with your order and installation every step of the way.'} />
        </SliderItem>
      </Box>
  </SliderWithDashes>
);

const SliderItem = styled(Box)`
  label: SliderItem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto 10px;
  min-height: 293px;
  padding: 60px 20px 50px 40px;
`;

export default ReviewSlider;
