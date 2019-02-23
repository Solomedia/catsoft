import { Flex, Box } from '@rebass/grid/emotion';
import styled, { breakpoints, colors } from 'lib/theme';

const { textColor } = colors;

export const Container: Box = styled(Box)`
  label: container;
  max-width: 1200px;
  margin: auto;
  padding: 0 15px;
`;

export const ContainerFluid = styled(Box)`
  label: 'container-fluid';
  padding: 0 15px;
`;

export const Row: Flex = styled(Flex)`
  label: row;
  margin: 0 -15px;
  margin-top: ${({ mt }: any) => (mt ? `${mt}px` : 0)};
  flex-direction: column;
  @media (min-width: ${breakpoints['sm']}) {
    flex-direction: row;
  }
`;

export const Col: Box = styled(Box)`
  label: col;
  padding: 0 15px;
`;

export const Text: Box = styled(Box)`
  color: ${(props: any) => props.color || textColor};
  font-weight: ${(props: any) => props.weight || 400};
`;

Text.defaultProps = {
  as: 'p'
};

export const Button: Box = styled(Box)`
  label: button;
  font-weight: 300;
  padding: ${(props: any) => props.px || '7px 10px'};
  border-radius: 37px;
  border: 2px solid;
  font-size: ${(props: any) => {
    const { lg } = props;
    if (lg) return '14px';
    return props.fontSize || '10px';
  }};
  background-color: ${({ theme, revert }: any) =>
    !revert ? theme.colors.secondary : '#fff'};
  color: ${({ theme, revert }: any) =>
    !revert ? '#fff' : theme.colors.secondary};
  border-color: ${({ theme, revert }: any) =>
    !revert ? 'transparent' : theme.colors.secondary};
  text-transform: uppercase;
  min-height: ${(props: any) => {
    const { lg } = props;
    if (lg) return '47px';
    return '33px';
  }};
  width: ${(props: any) => {
    const { sm, md, lg } = props;
    if (sm) return '109px';
    if (md) return '161px';
    if (lg) return '177px';
  }};
  max-width: ${(props: any) => props.maxWidth || '100%'};
  @media (min-width: ${breakpoints['sm']}) {
    min-height: ${(props: any) => {
      const { lg, md } = props;
      if (md) return '48px';
      if (lg) return '74px';
      return '';
    }};
    width: ${(props: any) => {
      const { sm, md, lg } = props;
      if (sm) return '102px';
      if (md) return '233px';
      if (lg) return '282px';
      return '';
    }};
  }
`;

Button.defaultProps = {
  as: 'button'
};
