import React from 'react';
import { render } from 'react-testing-library';

import Input from './Input';

function validator(value: string) {
  if (value.match(/^[a-zA-Z]+$/)) {
    return 'Invalid selection, must choose number';
  }
}

test('Input', () => {
  render(<Input />);

  const { container, rerender } = render(<Input validator={validator} />);
  const input = container.querySelector('input')!;
  expect(input.checkValidity()).toBeTruthy();
  rerender(<Input validator={validator} value="Invalid" />);
  expect(input.checkValidity()).toBeFalsy();
  rerender(<Input validator={validator} value="3" />);
  expect(input.checkValidity()).toBeTruthy();
});
