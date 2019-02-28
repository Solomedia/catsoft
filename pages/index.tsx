import React from 'react';
import { Box } from '@rebass/grid/emotion';
import { DataValue } from 'react-apollo';
// Local modules
import Main from 'layouts/main';
import { Container } from 'lib/ui';
import { ThemeProps, theme } from 'lib/theme';
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
  theme: ThemeProps;
}

const Home: React.SFC<Props> = () => {
  return (
    <Main title="Home Page">
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
    </Main>
  );
};

export default defaultPage(Home);
