import React, { ReactElement } from 'react';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Components/Radio',
};

const RadioStory = (): ReactElement => {
  return <div>Radio</div>;
};

export const mango = Mango<{}>(RadioStory);

export const skyline = Skyline<{}>(RadioStory);
