import clsx from 'clsx';
import React from 'react';
import WithClick, { WithClickType } from '../../hoc/WithClick';

export interface MenuItemBaseProps extends WithClickType {
  label: string;
  classes?: string | string[];
}

const MenuItemBase: React.FC<MenuItemBaseProps> = ({
  label,
  classes,
}: MenuItemBaseProps) => {
  return <div className={clsx('MenuItem', classes)}>{label}</div>;
};

export default WithClick<MenuItemBaseProps>(MenuItemBase);
