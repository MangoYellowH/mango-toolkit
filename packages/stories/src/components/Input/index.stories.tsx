import React, { ReactElement, useState } from 'react';
import { text } from '@storybook/addon-knobs';
import { Input } from '@mango-solution/mango-ui';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

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
