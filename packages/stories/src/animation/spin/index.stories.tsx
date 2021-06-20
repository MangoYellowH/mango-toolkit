import React, { ReactElement } from 'react';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';
import { Header } from '@mango-solution/mango-ui';

export default {
  title: 'Animation/spin',
};

const HeaderStory = (): ReactElement => {
  return <Header />;
};

export const mango = Mango<{}>(HeaderStory);

export const skyline = Skyline<{}>(HeaderStory);
