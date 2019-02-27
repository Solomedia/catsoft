import { Box, Flex } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled, { ThemeProps, breakpoints } from 'lib/theme';
import { Button, Text } from 'lib/ui';

interface Props {
  color: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  theme: ThemeProps;
}

const CategoryItem: React.SFC<Props> = props => {
  const { title, subtitle, theme, color, image, imageAlt } = props;
  return (
    <Flex
      alignItems="center"
      mb={1}
      bg={theme.colors.white}
      width={1}
      css={css`
        border-radius: 1.4px;
        height: 131px;
        max-width: 384px;
        min-width: 266px;
        @media (min-width: ${breakpoints['md']}) {
          height: 181.3px;
        }
      `}
    >
      <Flex
        alignItems="center"
        css={css`
          position: relative;
        `}
      >
        <Box
          bg={color}
          css={css`
            height: 69px;
            width: 94px;
            @media (min-width: ${breakpoints['md']}) {
              height: 96px;
              width: 135px;
            }
          `}
        />
        <Image src={image} alt={imageAlt} />
      </Flex>
      <Box ml={[1, 2]}>
        <Text
          as="h2"
          fontSize={[1, 1, 5]}
          weight={300}
          color={theme.colors.black}
          css={css`
            line-height: 19px;
            text-transform: uppercase;
            @media (min-width: ${breakpoints['md']}) {
              line-height: 27px;
            }
          `}
        >
          {title} <br />
          <Text as="span" weight={900}>
            {subtitle}
          </Text>
        </Text>
        <Button
          mt={[2, 1]}
          css={css`
            @media (max-width: ${breakpoints['md']}) {
              min-height: 28px;
            }
          `}
          sm
        >
          Click here
        </Button>
      </Box>
    </Flex>
  );
};

const Image = styled.img`
  display: block;
  height: 104px;
  width: 67;
  left: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (min-width: ${breakpoints['md']}) {
    left: 21px;
    height: auto;
    width: auto;
  }
`;

export default withTheme(CategoryItem);
