import clsx from 'clsx';
import React from 'react';
import { WithClickType } from '../../hoc/WithClick';

interface MenuProps {
  open?: boolean;
  onClick?: () => void;
  children?: React.FC<WithClickType>;
}

const Menu: React.FC<MenuProps> = ({ children }: MenuProps) => {
  return <div className={clsx('Menu')}>{children}</div>;
};

export default Menu;
