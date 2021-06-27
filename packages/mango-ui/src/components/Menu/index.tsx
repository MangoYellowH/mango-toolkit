import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface MenuProps {
  open?: boolean;
  children?: ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }: MenuProps) => {
  return <div className={clsx('Menu')}>{children}</div>;
};

export default Menu;
