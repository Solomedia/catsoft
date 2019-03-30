import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import styled from 'lib/theme';
import { Text, Button } from 'lib/ui';

interface Props {
  applyCodeHandler: (promoCode: string) => void;
}

interface State {
  promoCode: string;
}

class ApplyCodeForm extends React.Component<Props, State> {
  public state = {
    promoCode: ''
  };

  public render() {
    const { promoCode } = this.state;
    const { applyCodeHandler } = this.props;

    return (
      <Box>
        <Text fontSize={8} weight={300} color="#212B36">
          Promocode
        </Text>
        <Flex mt={4}>
          <InputStyle
            placeholder="Enter Promocode"
            onChange={e => this.setState({ promoCode: e.target.value })}
          />
          <ApplyBtn
            width={1}
            as="button"
            fontSize="14px"
            maxWidth="184px"
            revert
            onClick={() => applyCodeHandler(promoCode)}
          >
            Apply
          </ApplyBtn>
        </Flex>
      </Box>
    );
  }
}

const ApplyBtn: Box = styled(Button)`
  height: 55px;
`;

const InputStyle = styled.input`
  align-self: center;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #c2cdd3;
  background-color: #fff;
  height: 50px;
  border-radius: 24px;
  padding: 0 22px;
  width: 100%;
  max-width: 228px;
  margin-right: 20px;
`;

export default ApplyCodeForm;
