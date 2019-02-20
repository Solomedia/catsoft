import { Box } from '@rebass/grid/emotion';
// Local modules
import styled, { breakpoints } from 'lib/theme';
// TODO: fetch data from API.
import data from 'static/mockdata.json';

const ProductAbout = () => {
  const { product_about } = data;
  return (
    <Box>
      <Title>{product_about.title}</Title>
      <Text>{product_about.text}</Text>
    </Box>
  );
};

const Title = styled.h2`
  color: ${(props: any) => props.theme.colors.black};
  font-size: 28px;
  font-weight: 300;
  line-height: 32px;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 40px;
  @media (max-width: ${breakpoints['sm']}) {
    margin-bottom: 24px;
  }
`;

const Text = styled.p`
  color: ${(props: any) => props.theme.colors.black};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: justify;
`;

export default ProductAbout;
