import { size } from 'polished';
import React from 'react';
import InlineSVG, { Props } from 'react-inlinesvg';

import Omit from '../../Omit';
import styled from '../../styled-components';
import { scale } from '../../Theme';

import koepel from './icons/koepel.svg';

export const icons = {
  koepel,
};

const StyledInlineSVG = styled(InlineSVG)`
  svg {
    ${size(scale(0))};
  }
`;

export function Icon({
  'aria-label': ariaLabel,
  icon,
  ...rest
}: { 'aria-label'?: string; icon: keyof typeof icons } & Omit<Props, 'src'>) {
  return (
    <span role="img" aria-label={ariaLabel || icon}>
      <StyledInlineSVG src={icons[icon]} {...rest} />
    </span>
  );
}

export default Icon;
