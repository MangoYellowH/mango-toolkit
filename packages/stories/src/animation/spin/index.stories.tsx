import React, { ReactElement } from 'react';
import SettingIcon from '@mango-solution/svg/setting.svg';
import { Animation } from '@mango-solution/mango-ui';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Animation/spin',
};

const SpinComponent: React.FC<{}> = (): ReactElement => {
  // const [state, setState] = useState<AnimationState>(AnimationState.initial);
  return (
    <Animation classes="spin-animation">
      <SettingIcon />
    </Animation>
  );
};

export const mango = Mango<{}>(SpinComponent);

export const skyline = Skyline<{}>(SpinComponent);
