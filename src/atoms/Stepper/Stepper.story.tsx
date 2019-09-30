import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import styled from '../../styled-components';
import Button from '../Button';
import Heading from '../Heading/Heading';
// eslint-disable-next-line import/no-relative-parent-imports
import Stepper from './Stepper';

const beforeStep = <Heading as="h2">Start!</Heading>;
const stepOne = <Heading as="h2">Stap 1</Heading>;
const stepTwo = <Heading as="h2">Stap 2</Heading>;
const stepThree = <Heading as="h2">Stap 3</Heading>;
const afterStep = <Heading as="h2">Einde!</Heading>;

export const steps = [beforeStep, stepOne, stepTwo, stepThree, afterStep];

const StepperBackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const CopyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// tslint:disable-next-line: no-empty-interface
interface StepActionProps {}

interface StepActionState {
  step: number;
  total: number;
}

export class StepperStory extends Component<StepActionProps, StepActionState> {
  public state: StepActionState = { step: 0, total: steps.length };

  public handleClickBack = () => {
    this.setState(({ step }) => ({ step: step - 1 }));
  };

  public handleClickNext = () => {
    this.setState(({ step }) => ({ step: step + 1 }));
  };

  public render() {
    const { step, total } = this.state;

    return (
      <>
        <StepperBackContainer>
          {step > 0 ? (
            <Button basic={true} onClick={this.handleClickBack}>
              Vorige
            </Button>
          ) : (
            <Button basic={true} />
          )}
          <Stepper current={step} total={total} />
        </StepperBackContainer>
        <CopyContainer>
          <>{steps[step]}</>
        </CopyContainer>
        <NextButtonContainer>
          {step === steps.length - 1 ? (
            <Button basic={true} />
          ) : (
            <Button onClick={this.handleClickNext}>Volgende</Button>
          )}
        </NextButtonContainer>
      </>
    );
  }
}

storiesOf('Atoms', module).add('Stepper', () => <StepperStory />);

export default StepperStory;
