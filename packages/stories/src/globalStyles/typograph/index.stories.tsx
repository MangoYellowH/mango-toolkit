// this file is only to prove that the svg could be added into storybook with webpack
import React from 'react';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Global Styles/Typograph',
};

const Typograph: React.FC = (): React.ReactElement => (
  <div style={{ width: '200px' }} className="typograph-area">
    <div className="banner-text">banner</div>
    <div className="header-text">header</div>
    <div className="body-text">body</div>
    <div className="button-text">button text</div>
  </div>
);

export const mango = Mango(Typograph);

export const skyline = Skyline(Typograph);
