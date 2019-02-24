import React from 'react';
import { Flex, Box } from '@rebass/grid/emotion';
import Dropdown from 'react-dropdown';
import { Text } from 'lib/ui';

// Locals
import styled, { breakpoints, colors } from 'lib/theme';

const { textColor3 } = colors;

interface Props {
  options: string[];
  selectedOption: string;
  onChange: (arg: any) => any;
}

const CompareEditionsSelect: React.SFC<Props> = props => {
  const { options, selectedOption, onChange } = props;
  const arrowClosed = <Icon className="material-icons">arrow_drop_down</Icon>;
  const arrowOpen = <Icon className="material-icons">arrow_drop_up</Icon>;

  return (
    <Flex flexWrap="wrap">
      <Text color={textColor3} fontSize={[6, 8]}>
        Compare
      </Text>
      <Box>
        <DropdownStyled
          options={options}
          onChange={onChange}
          placeholder={options[0]}
          value={selectedOption}
          arrowClosed={arrowClosed}
          arrowOpen={arrowOpen}
        />
      </Box>

      <Text color={textColor3} fontSize={[6, 8]}>
        Editions for Windows
      </Text>
    </Flex>
  );
};

const DropdownStyled = styled(Dropdown)`
  height: 32px;
  width: 174px;
  background-color: #fff;
  padding-left: 10px;
  cursor: pointer;

  @media (min-width: ${breakpoints['md']}) {
    width: 195px;
  }

  .Dropdown-control {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
  .Dropdown-placeholder {
    color: #212b36;
    font-size: 24px;
    font-weight: 600;
    @media (min-width: ${breakpoints['md']}) {
      font-size: 28px;
    }
  }
  .Dropdown-menu {
    background-color: #fff;
    border: 1px solid #d4d5e2;
    width: 174px;
    margin-left: -11px;
    padding: 0 10px 10px;
    z-index: 2;
    position: relative;

    @media (min-width: ${breakpoints['md']}) {
      width: 195px;
    }
  }
  .Dropdown-option {
    color: #727272;
    font-size: 14px;
    line-height: 18px;
    margin-top: 10px;
  }
`;

const Icon = styled.i`
  color: #6d5cff;
  font-size: 26px;
`;

export default CompareEditionsSelect;
