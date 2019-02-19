import React from 'react';
import Link from 'next/link';
import { Flex } from '@rebass/grid/emotion';
import styled, { theme } from 'lib/theme';
const {
  colors: { textColor, textColor2 }
} = theme;

interface Route {
  name: string;
  path: string;
}

interface Props {
  routes: Route[];
  mt?: number | number[] | string | string[];
}

const Breadcrumb: React.SFC<Props> = ({ routes, mt }) => (
  <React.Fragment>
    {routes && (
      <Flex mt={mt} flexWrap="wrap">
        {routes.map((route, i) => (
          <Link key={i} href={route.path}>
            <LinkStyled lastItem={i === routes.length - 1}>
              {route.name}
              {i < routes.length - 1 && (
                <Icon className="material-icons">chevron_right</Icon>
              )}
            </LinkStyled>
          </Link>
        ))}
      </Flex>
    )}
  </React.Fragment>
);

const LinkStyled: any = styled.a`
  align-items: center;
  color: ${({ lastItem }: any) => (!lastItem ? textColor2 : textColor)};
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
`;

const Icon = styled.i`
  color: ${textColor2};
  font-size: 16px;
`;

export default Breadcrumb;
