import React, { useState } from 'react';
import { Radio, RadioItem } from './index';

export const Example: React.FC<unknown> = () => {
  const [value, setValue] = useState<string>('');

  return (
    <Radio value={value} onClick={setValue}>
      <RadioItem text="radio1" value="radio1" key="radio1" />
      <RadioItem text="radio2" value="radio2" key="radio2" />
    </Radio>
  );
};

export default Example;
