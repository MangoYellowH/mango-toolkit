import React, { ComponentType } from 'react';

export interface WithClickType {
  value?: string; // the key of click element
  onClick?: (value: string) => void; //  when click this area
}

const WithClick = function <T extends WithClickType>(
  Component: ComponentType<T>,
): ComponentType<T> {
  const WrappedComponent: React.FC<T> = (props: T) => {
    const { onClick, value } = props;
    if (!onClick || !value) {
      return <Component {...props} />;
    }

    return (
      <div
        className="click-area"
        role="button"
        onClick={() => onClick(value)}
        onKeyPress={() => onClick(value)}
        tabIndex={0}
      >
        <Component {...props} />
      </div>
    );
  };

  return WrappedComponent;
};

export default WithClick;
