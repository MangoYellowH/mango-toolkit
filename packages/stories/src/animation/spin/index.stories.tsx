import React, { ReactElement } from 'react';
import SettingIcon from '@mango-solution/svg/setting.svg';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Animation/spin',
};

const SpinComponent = (): ReactElement => {
  return (
    <div className="spin-animation">
      <SettingIcon />
    </div>
  );
};

export const mango = Mango<{}>(SpinComponent);

export const skyline = Skyline<{}>(SpinComponent);
