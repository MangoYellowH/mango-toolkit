import clsx from 'clsx';
import React from 'react';
import WithHidden, { WithHiddenType } from '../../hoc/WithHidden';
import { appendClickEvent } from '../../hoc/WithClick';
import MenuItemBase, { MenuItemBaseProps } from './MenuItem';

interface MenuProps extends WithHiddenType {
  onClick: (value?: string) => void;
  children: React.ReactElement<MenuItemBaseProps>[];
  classes?: string | string[];
}

const Menu: React.FC<MenuProps> = ({
  children,
  onClick,
  classes,
}: MenuProps) => {
  return (
    <div className={clsx('Menu', classes)}>
      {appendClickEvent(children, onClick)}
    </div>
  );
};

export const MenuItem = MenuItemBase;

export default WithHidden<MenuProps>(Menu);

export * from './MenuItem';
