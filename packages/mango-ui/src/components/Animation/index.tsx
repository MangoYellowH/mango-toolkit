import clsx from 'clsx';
import React from 'react';

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
  classes?: string | string[];
  onMouseOver?: () => void;
  onFocus?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
}

export const Animation: React.FC<AnimationProps> = ({
  animationType = AnimationType.spin,
  animationState = AnimationState.initial,
  classes,
  children,
  onMouseOver,
  onFocus,
  onMouseLeave,
  onClick,
  onKeyDown,
}: AnimationProps) => {
  const handleMouseOver = () => {
    if (onMouseOver) {
      onMouseOver();
    }
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleMouseLeave = () => {
    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = () => {
    if (onKeyDown) {
      onKeyDown();
    }
  };

  return (
    <div
      className={clsx('animation', animationType, animationState, classes)}
      onMouseOver={handleMouseOver}
      onFocus={handleFocus}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default Animation;
