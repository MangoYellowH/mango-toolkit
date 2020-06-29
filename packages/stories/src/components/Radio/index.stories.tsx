import React, { ReactElement, useState } from 'react';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';
import { Radio, RadioItem } from '@mango-solution/mango-ui';

export default {
  title: 'Components/Radio',
};

const RadioStory = (): ReactElement => {
  const [value, setValue] = useState<string>('');

  return (
    <div style={{ width: '600px' }}>
      <Radio value={value} onClick={setValue}>
        <RadioItem text="radio1" value="radio1" key="radio1" />
        <RadioItem text="radio2" value="radio2" key="radio2" />
      </Radio>
    </div>
  );
};

export const mango = Mango<{}>(RadioStory);

export const skyline = Skyline<{}>(RadioStory);
