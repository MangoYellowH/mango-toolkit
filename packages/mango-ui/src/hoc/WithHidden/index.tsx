import React, { ComponentType } from 'react';

export interface WithHiddenType {
  setHidden?: (hidden: boolean) => void;
  hidden?: boolean;
}

export const WithHidden = <T extends WithHiddenType>(
  Component: ComponentType<T>,
): ComponentType<T> => {
  const WrappedComponent: React.FC<T> = (props: T) => {
    const { hidden } = props;
    if (hidden) {
      return <></>;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};
