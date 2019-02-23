import styled, { CreateStyled } from '@emotion/styled';

export const breakpoints = {
  sm: '767px',
  md: '960px',
  lg: '1200px'
};

export const colors = {
  textColor: '#000032',
  textColor2: '#7F7F99',
  textColor3: '#212B36',
  textColor4: '#8D9AAA',
  black: '#000032',
  white: '#FFFFFF',
  primary: '#5C56C8',
  secondary: '#6D5CFF',
  containerBg2: '#F6F6FA',
  containerBg3: '#D4D5E2',
  flowerblue: '#7668EE',
  waterloo: '#7F7F99',
  amber: '#FFC000',
  conifer: '#B2D043',
  bittersweet: '#FF766B',
  whisper: '#FAFAFC',
  linkWater: '#EEEFFB',
  mischka: '#D4D5E2',
  borderColor: 'rgba(152,170,186,0.35)',
  dangerColor: '#ff766b'
};

interface ColorsInt {
  [key: string]: any;
}

export interface ThemeProps {
  colors: ColorsInt;
  space: number[];
  breakpoints: string[];
  fontSizes: number[];
}

export const theme: ThemeProps = {
  colors,
  space: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 45]
};

export default styled as CreateStyled<ThemeProps>;
