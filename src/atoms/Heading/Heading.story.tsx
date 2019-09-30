import { storiesOf } from '@storybook/react';
import React from 'react';

import Heading from './Heading';

storiesOf('Atoms', module).add('Heading', () => (
  <>
    <Heading>Atheneum College Hageveld (h1)</Heading>
    <Heading as="h2">Atheneum College Hageveld (h2)</Heading>
  </>
));
