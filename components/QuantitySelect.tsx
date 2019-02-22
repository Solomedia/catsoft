import React from 'react';
import { Box, Flex } from '@rebass/grid/emotion';
import styled from 'lib/theme';

interface State {
  quantityCount: number;
}

interface Props {
  mt?: string;
  onQuantityChange: (arg: number) => any;
  productQty?: number;
}

class QuantitySelect extends React.Component<Props, State> {
  public state = {
    quantityCount: 1
  };

  public componentDidMount() {
    const { productQty } = this.props;

    this.setState({
      quantityCount: productQty || 1
    });
  }

  private async handleDecrement() {
    await this.setState((prevState: State) => {
      if (prevState.quantityCount <= 0) {
        return { quantityCount: 0 };
      }
      return { quantityCount: prevState.quantityCount - 1 };
    });

    this.props.onQuantityChange(this.state.quantityCount);
  }

  private async handleIncrement() {
    await this.setState((prevState: State) => {
      return { quantityCount: prevState.quantityCount + 1 };
    });
    this.props.onQuantityChange(this.state.quantityCount);
  }

  public render() {
    const { mt } = this.props;
    return (
      <Wrapper mt={mt}>
        <Box>
          <ControllerBtn onClick={() => this.handleDecrement()}>
            <Icon>-</Icon>
          </ControllerBtn>
        </Box>
        <Box> {this.state.quantityCount}</Box>
        <Box>
          <ControllerBtn onClick={() => this.handleIncrement()}>
            <Icon plus>+</Icon>
          </ControllerBtn>
        </Box>
      </Wrapper>
    );
  }
}

const Icon: any = styled.div`
  color: ${({ plus }: any) => (!plus ? '#d4d5e2' : '#6d5cff')};
  &:hover {
    cursor: pointer;
  }
`;

const ControllerBtn = styled.button`
  background-color: transparent;
  border: 0;
`;

const Wrapper: Flex = styled(Flex)`
  width: 123px;
  border: 0.8px solid #d4d5e2;
  border-radius: 13px;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 3px 5px;
  margin-top: ${({ mt }: any) => mt};
`;

export default QuantitySelect;
