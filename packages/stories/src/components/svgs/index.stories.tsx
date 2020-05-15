// this file is only to prove that the svg could be added into storybook with webpack
import React from 'react';
import LeftIcon from './svg/left.svg';

export default {
  title: 'Other/SVG',
};

export const Left: React.FC<{}> = (): React.ReactElement => (
  <div style={{ width: '20px' }}>
    <LeftIcon />
  </div>
);
