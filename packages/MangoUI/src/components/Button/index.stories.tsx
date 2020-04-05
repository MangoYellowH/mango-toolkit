import React, { ReactElement } from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';
import Button from './index';

export default {
  title: 'Components/Button',
};

const ButtonStory = (): ReactElement => (
  <div>
    <Button
      onClick={action('default button')}
      type="default"
    >
      {text('default text', 'default')}
    </Button>
    <Button
      onClick={action('primary button')}
      type="primary"
    >
      {text('primary text', 'primary')}
    </Button>
    <Button
      onClick={action('error button')}
      type="error"
    >
      {text('error text', 'error')}
    </Button>
    <br />
    <Button
      onClick={action('default button')}
      disabled
      type="default"
    >
      {text('default text', 'default')}
    </Button>
    <Button
      onClick={action('primary button')}
      disabled
      type="primary"
    >
      {text('primary text', 'primary')}
    </Button>
    <Button
      onClick={action('error button')}
      disabled
      type="error"
    >
      {text('error text', 'error')}
    </Button>
  </div>

);

export const mango = Mango<{}>(ButtonStory);

export const skyline = Skyline<{}>(ButtonStory);
