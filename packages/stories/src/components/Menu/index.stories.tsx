import { Menu, MenuItem, Button } from '@mango-solution/mango-ui';
import React, { ReactElement, useState } from 'react';
import Mango from '../../HOC/WithTheme/Mango';
import Skyline from '../../HOC/WithTheme/Skyline';

export default {
  title: 'Components/Menu',
};

const MenuItemConfig = [
  {
    value: 'menu1',
    label: 'menu1',
  },
  {
    value: 'menu2',
    label: 'menu2',
  },
  {
    value: 'menu3',
    label: 'menu4',
  },
];

const MenuStory = (): ReactElement => {
  const [open, setMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setMenuOpen(true);
  };

  const handleMenuClick = (value: string) => {
    setMenuOpen(false);
    console.log(value);
  };

  return (
    <div style={{ width: '600px' }}>
      <Button onClick={handleClick}>show menu</Button>
      <Menu onClick={handleMenuClick} hidden={!open}>
        {MenuItemConfig.map(({ value, label }) => (
          <MenuItem label={label} value={value} key={value} />
        ))}
      </Menu>
    </div>
  );
};

export const mango = Mango<{}>(MenuStory);

export const skyline = Skyline<{}>(MenuStory);
