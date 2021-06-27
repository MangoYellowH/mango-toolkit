import React, { ReactElement, useState } from 'react';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Components/Menu',
};

const MenuStory = (): ReactElement => {
  const [, setMenuOpen] = useState<boolean>(false);

  const handleFocus = () => {
    setMenuOpen(true);
  };

  const handleBlur = () => {
    setMenuOpen(false);
  };

  return (
    <div style={{ width: '600px' }}>
      <input onFocus={handleFocus} onBlur={handleBlur} />
    </div>
  );
};

export const mango = Mango<{}>(MenuStory);

export const skyline = Skyline<{}>(MenuStory);
