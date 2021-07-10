import React, { ReactElement, useState } from 'react';
import SettingIcon from '@mango-solution/svg/setting.svg';
import { Animation, AnimationState } from '@mango-solution/mango-ui';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Animation/spin',
};

const SpinComponent: React.FC = (): ReactElement => {
  const [state, setState] = useState<AnimationState>(AnimationState.initial);

  const handleMouseOver = () => {
    setState(AnimationState.active);
  };

  const handleMouseLeave = () => {
    setState(AnimationState.inactive);
  };

  return (
    <Animation
      classes="spin-animation"
      animationState={state}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <SettingIcon />
    </Animation>
  );
};

export const mango = Mango(SpinComponent);

export const skyline = Skyline(SpinComponent);
