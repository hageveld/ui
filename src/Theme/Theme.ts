import { darken, lighten, modularScale } from 'polished';

export const borderRadius = '0.125em';
export const borderRadiusLarge = '0.375em';
const lightnessMod = 0.06;
const primary = '#5B34AD';
const secondary = '#E67200';
export const scale = (steps: number) => modularScale(steps, undefined, 1.5);
export const transitionDuration = '0.12s';
export const monospace =
  "'Roboto Mono', Menlo, Monaco, Consolas, 'Courier New', monospace";

export default interface Theme {
  name: string;
  text: string;
  primaryLighter: string;
  primaryLight: string;
  primary: string;
  primaryDark: string;
  primaryDarker: string;
  secondaryLighter: string;
  secondaryLight: string;
  secondary: string;
  secondaryDark: string;
  secondaryDarker: string;
}

export const light: Theme = {
  name: 'Light',
  text: 'black',
  primaryLighter: lighten(lightnessMod * 2, primary),
  primaryLight: lighten(lightnessMod, primary),
  primary,
  primaryDark: darken(lightnessMod, primary),
  primaryDarker: darken(lightnessMod * 2, primary),
  secondaryLighter: lighten(lightnessMod * 2, secondary),
  secondaryLight: lighten(lightnessMod, secondary),
  secondary,
  secondaryDark: darken(lightnessMod, secondary),
  secondaryDarker: darken(lightnessMod * 2, secondary),
};
