import React from 'react';
import { NextFunctionComponent } from 'next';
import { Box } from '@rebass/grid/emotion';
import { DataValue } from 'react-apollo';
// Local modules
import { Container } from 'lib/ui';
import { theme } from 'lib/theme';
import {
  BrandsBannerMob,
  ReviewSlider,
  Reviews,
  HeroWithCta,
  Category
} from 'components';
import defaultPage from 'hoc/defaultPage';

interface Props {
  data: DataValue<{ feed }>;
}

const Home: NextFunctionComponent<Props> = () => {
  return (
    <>
      <Container>
        <HeroWithCta />
      </Container>
      <BrandsBannerMob />
      <Box bg={theme.colors.containerBg2} mt={['0', 3]} py={['30px', '80px']}>
        <Container>
          <Category />
        </Container>
        <Container>
          <Reviews />
          <ReviewSlider />
        </Container>
      </Box>
    </>
  );
};

export default defaultPage(Home);
