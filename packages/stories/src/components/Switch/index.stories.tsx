import React, { ReactElement } from 'react';
import { Switch } from '@mango-solution/mango-ui';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Components/Switch',
};

const SwitchStory = (): ReactElement => {

  return (
    <Switch />
  );
};

export const mango = Mango<{}>(SwitchStory);

export const skyline = Skyline<{}>(SwitchStory);
