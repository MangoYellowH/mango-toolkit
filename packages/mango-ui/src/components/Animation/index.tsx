import clsx from 'clsx';
import React, { useState } from 'react';

export enum AnimationType {
  spin = 'spin',
}

export enum AnimationState {
  active = 'active',
  inactive = 'inactive',
  initial = 'initial',
}

export interface AnimationProps {
  animationType?: AnimationType;
  animationState?: AnimationState;
  children?: React.ReactNode;
}

export const Animation: React.FC<AnimationProps> = ({
  animationType = AnimationType.spin,
  animationState = AnimationState.initial,
  children,
}: AnimationProps) => {
  const state = useState<AnimationState>(animationState);

  return (
    <div className={clsx('animation', animationType, state)}>{children}</div>
  );
};

export default Animation;
