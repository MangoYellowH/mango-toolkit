import React, { ReactElement } from 'react';
import { Header } from '@mango-solution/mango-ui';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Components/Header',
};

const HeaderStory = (): ReactElement => {
  return <Header />;
};

export const mango = Mango(HeaderStory);

export const skyline = Skyline(HeaderStory);
