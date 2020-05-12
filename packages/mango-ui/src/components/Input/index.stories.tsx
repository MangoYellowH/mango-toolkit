import React, { ReactElement, useState } from 'react';
import { text } from '@storybook/addon-knobs';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';
import Input from './index';

export default {
  title: 'Components/Input',
};

const InputStory = (): ReactElement => {
  const [value, setValue] = useState('');
  return (
    <Input
      type="text"
      placeholder={text('placeholder', 'placeholder')}
      value={value}
      onChange={setValue}
    />
  );
};

export const mango = Mango<{}>(InputStory);

export const skyline = Skyline<{}>(InputStory);
