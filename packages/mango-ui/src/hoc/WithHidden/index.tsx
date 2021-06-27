import React, { ComponentType } from 'react';

export interface WithHiddenType {
  hidden?: boolean;
}

export const WithHidden = <T extends WithHiddenType>(
  Component: ComponentType<T>,
): ComponentType<T> => {
  const WrappedComponent: React.FC<T> = (props: T) => {
    if (props?.hidden) {
      return <></>;
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
};
