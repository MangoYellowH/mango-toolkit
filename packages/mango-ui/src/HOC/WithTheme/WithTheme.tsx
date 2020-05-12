/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

const WithTheme = function WithTheme<T>(
  Component: React.ComponentType<T>,
  themeName: string,
): React.ComponentType<T> {
  const MangoStyleWrapper: React.FC<T> = (props: T) => (
    <div className={themeName}>
      <Component {...props} />
    </div>
  );
  return MangoStyleWrapper;
};

export default WithTheme;
