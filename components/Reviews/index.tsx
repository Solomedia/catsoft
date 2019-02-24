import { Flex, Box } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
// Local modules
import { breakpoints } from 'lib/theme';
import Rate from './rate';
// TODO: fetch data from API.
import data from 'static/mockdata.json';

const Reviews = () => {
  const { reviews } = data;
  return (
    <Box>
      <Box
        as="h3"
        fontSize={[6, 8]}
        css={css`
          text-align: center;
          font-weight: 300;
        `}
      >
        What costumers are saying about us
      </Box>
      <Flex
        mt={6}
        justifyContent="space-between"
        css={css`
          @media (max-width: ${breakpoints['sm']}) {
            flex-wrap: wrap;
            max-width: 335px;
            margin: auto;
          }
        `}
      >
        {data &&
          reviews.map((review, index) => (
            <Rate
              open={index === 0 ? true : false}
              key={review.id}
              data={review}
            />
          ))}
      </Flex>
    </Box>
  );
};

export default Reviews;
