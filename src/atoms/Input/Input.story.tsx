import { storiesOf } from '@storybook/react';
import React, {
  ChangeEvent,
  Component,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';
import { ThemedOuterStyledProps } from 'styled-components';

import Omit from '../../Omit';
import Theme from '../../Theme';
import Typography from '../../Typography';
import Input, { InputProps } from './Input';

class ControlledInput extends Component<
  InputProps &
    Omit<
      ThemedOuterStyledProps<
        DetailedHTMLProps<
          InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        >,
        Theme
      >,
      'ref'
    >,
  {
    value: string;
  }
> {
  public state = { value: '' };

  public handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => this.setState({ value });

  public render() {
    const { value } = this.state;
    return <Input value={value} onChange={this.handleChange} {...this.props} />;
  }
}

function validator(value: string) {
  if (value.match(/^[a-zA-Z]+$/)) {
    return 'Invalid selection, must choose number';
  }
}

storiesOf('Atoms', module).add('Input', () => (
  <div>
    {Object.entries({
      Naam: <Input icon="koepel" placeholder="Atheneum College Hageveld" />,
      Plaats: <Input icon="koepel" placeholder="Heemstede" iconSide="right" />,
      Getal: <ControlledInput validator={validator} />,
    }).map(([label, element]) => (
      <Typography as="label" key={label}>
        {label}
        <br />
        {element}
        <br />
      </Typography>
    ))}
  </div>
));
