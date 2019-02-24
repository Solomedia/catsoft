import React from 'react';
import { css } from '@emotion/core';
import { Flex } from '@rebass/grid/emotion';
import styled, { breakpoints, colors } from 'lib/theme';
import { Text } from 'lib/ui';
import Title from './Title';

const { containerBg2, mischka } = colors;

interface Product {
  id: number;
  name: string;
  price: number;
  stars: number;
  license_use: string;
  license_type: string;
  included_products: string[];
}

interface Props {
  data: Product[];
  featureList: string[];
}

const Table: React.SFC<Props> = ({ data, featureList }) => {
  return (
    <Flex
      flexDirection={['column', 'row']}
      mt={8}
      css={css`
        @media (min-width: ${breakpoints['sm']}) {
          border: 1px solid ${mischka};
        }
      `}
    >
      {data.length &&
        data.map(
          (
            {
              id,
              name,
              price,
              stars,
              license_use,
              license_type,
              included_products
            },
            i
          ) => (
            <Flex
              key={id}
              mb={[3, 0]}
              css={css`
                border: 1px solid ${mischka};
                @media (min-width: ${breakpoints['sm']}) {
                  border: none;
                  width: ${i ? '20%' : '40%'};
                }
              `}
            >
              <Flex
                flexDirection="column"
                css={css`
                  width: 140%;
                  @media (min-width: ${breakpoints['sm']}) {
                    width: 100%;
                    display: ${i ? 'none' : 'flex'};
                  }
                `}
              >
                <TableTitle
                  css={css`
                    @media (max-width: ${breakpoints['sm']}) {
                      display: none;
                    }
                  `}
                >
                  <Text width="100%" pl={[3, 2, 6]} as="span" fontSize={6}>
                    Feature
                  </Text>
                </TableTitle>
                <TableTitle
                  css={css`
                    @media (min-width: ${breakpoints['sm']}) {
                      display: none;
                    }
                  `}
                >
                  <Title name={name} price={price} stars={stars} />
                </TableTitle>
                {featureList.map(feature => (
                  <TableCell key={feature}>
                    <Text width="100%" pl={[3, 2, 6]} as="span">
                      {feature}
                    </Text>
                  </TableCell>
                ))}
                <TableCell>
                  <Text width="100%" pl={[3, 2, 6]} as="span">
                    License Use
                  </Text>
                </TableCell>
                <TableCell>
                  <Text width="100%" pl={[3, 2, 6]} as="span">
                    License Type
                  </Text>
                </TableCell>
              </Flex>
              <Flex
                flexDirection="column"
                css={css`
                  border-left: 1px solid ${mischka};
                  width: 100%;
                `}
              >
                <TableTitle
                  css={css`
                    @media (min-width: ${breakpoints['sm']}) {
                      display: none;
                    }
                  `}
                >
                  <Text as="span" weight="700">
                    Included
                  </Text>
                </TableTitle>
                <TableTitle
                  css={css`
                    @media (max-width: ${breakpoints['sm']}) {
                      display: none;
                    }
                  `}
                >
                  <Title name={name} price={price} stars={stars} />
                </TableTitle>
                {featureList.map((feature, index) => (
                  <TableCell key={feature}>
                    {included_products.length > index ? (
                      <IncludeIcon className="material-icons">
                        check
                      </IncludeIcon>
                    ) : (
                      <NotIncludeIcon className="material-icons">
                        close
                      </NotIncludeIcon>
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  <Text as="span">{license_use}</Text>
                </TableCell>
                <TableCell>
                  <Text as="span">{license_type}</Text>
                </TableCell>
              </Flex>
            </Flex>
          )
        )}
    </Flex>
  );
};

const TableTitle: Flex = styled(Flex)`
  border-bottom: 1px solid ${mischka};
  background-color: ${containerBg2};
  height: 135px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TableCell = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 60px;

  &:nth-of-type(2n) {
    background-color: ${containerBg2};
  }
`;

const IncludeIcon = styled.i`
  label: IncludeIcon;
  color: #b2d043;
  width: 22px;
  font-size: 28px;
`;

const NotIncludeIcon = styled.i`
  label: NotIncludeIcon;
  color: #ff766b;
  width: 22px;
  font-size: 28px;
`;

export default Table;
