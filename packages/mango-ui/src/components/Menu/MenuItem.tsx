import clsx from 'clsx';
import React from 'react';
import { WithClickType } from '../../hoc/WithClick';

interface MenuItemBaseProps extends WithClickType {
  label: string;
  classes?: string | string[];
}

const MenuItemBase: React.FC<MenuItemBaseProps> = ({
  label,
  classes,
}: MenuItemBaseProps) => {
  return <div className={clsx('MenuItem', classes)}>{label}</div>;
};

export default MenuItemBase;
