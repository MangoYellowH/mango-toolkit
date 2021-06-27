import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { WithClick, WithClickType } from '../../hoc/WithClick';

export interface MenuItemBaseProps extends WithClickType {
  label: string;
  classes?: string | string[];
}

const MenuItemBase: React.FC<MenuItemBaseProps> = ({
  label,
  classes,
}: MenuItemBaseProps): ReactElement<MenuItemBaseProps> => {
  return <div className={clsx('MenuItem', classes)}>{label}</div>;
};

export const MenuItem = WithClick<MenuItemBaseProps>(MenuItemBase);
