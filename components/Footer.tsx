import { Box, Flex } from '@rebass/grid/emotion';
import { css } from '@emotion/core';
// locals
import { Container, Row, Col, Text } from 'utils/ui';
import data from 'static/mockdata.json';
import Link from 'next/link';
import styled, { breakpoints } from 'lib/theme';

const { footer: footerData } = data;

const ColMobToggle: Box = styled(Col)`
  label: ColMobToggle;
  @media (max-width: ${breakpoints['sm']}) {
    display: ${(props: any) => (props.ShowSm ? 'block' : 'none')};
  }
`;

const Footer = () => {
  const renderLinks = links =>
    links.map((link, i) => (
      <Link key={i} href={link.url}>
        <a
          css={css`
            color: #7f7f99;
            display: flex;
            font-size: 12px;
            font-weight: 500;
            line-height: 22px;
            margin-top: 10px;
            @media (min-width: ${breakpoints['sm']}) {
              max-width: 235px;
            }
          `}
        >
          {link.imgUrl && (
            <img
              src={link.imgUrl}
              alt={link.imgAlt}
              css={css`
                width: 100%;
              `}
            />
          )}
          {link.icon && (
            <i
              className="material-icons"
              css={css`
                font-size: 18px;
                margin-top: 2px;
                margin-right: 5px;
              `}
            >
              {link.icon}
            </i>
          )}
          {link.linkText}
        </a>
      </Link>
    ));

  return (
    <Box mt={[2, 4]} py={'20px'} bg={'#fafafc'}>
      <Container>
        <Row justifyContent="space-between">
          {footerData.map((section, i) => (
            <ColMobToggle
              mt={1}
              key={i}
              ShowSm={
                footerData.length - 1 === i || footerData.length - 2 === i
              }
            >
              <Text
                css={css`
                  color: #7f7f99;
                  font-size: 12px;
                  font-weight: bold;
                  line-height: 22px;
                `}
              >
                {section.title}
              </Text>
              <Flex flexDirection="column">{renderLinks(section.links)}</Flex>
            </ColMobToggle>
          ))}
        </Row>
        <div
          css={css`
            height: 1px;
            width: 100%;
            background-color: #d4d5e2;
            margin-top: 15px;
            margin-bottom: 10px;
          `}
        />
        <Flex
          justifyContent="space-between"
          css={css`
            @media (max-width: ${breakpoints['sm']}) {
              flex-direction: column;
            }
          `}
        >
          <Flex order={[3, 'unset']} mt={0}>
            <Text
              css={css`
                color: #7f7f99;
                font-size: 12px;
                font-weight: bold;
                line-height: 22px;
              `}
            >
              CATSOFT
            </Text>
            <Text
              css={css`
                color: #7f7f99;
                font-size: 12px;
                font-weight: 500;
                line-height: 22px;
                margin-left: 10px;
              `}
            >
              © Catsoft.Co 2018 All Rights Reserved
            </Text>
          </Flex>
          <div
            css={css`
              height: 1px;
              width: 100%;
              background-color: #d4d5e2;
              order: 2;
              margin-top: 10px;
              @media (min-width: ${breakpoints['sm']}) {
                display: none;
              }
            `}
          />
          <Flex order={[1, 'unset']} alignItems="center">
            <Text
              css={css`
                color: #7f7f99;
                font-size: 12px;
                font-weight: 500;
                line-height: 22px;
              `}
            >
              Payment methods:
            </Text>
            <Box as="img" src="https://via.placeholder.com/43x30" ml={1} />
            <Box as="img" src="https://via.placeholder.com/43x30" ml={1} />
            <Box as="img" src="https://via.placeholder.com/43x30" ml={1} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
