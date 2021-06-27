import clsx from 'clsx';
import React from 'react';
import { WithHidden, WithHiddenType } from '../../hoc/WithHidden';
import { appendClickEvent } from '../../hoc/WithClick';
import { MenuItemBaseProps } from './MenuItem';

export interface MenuProps extends WithHiddenType {
  onClick: (value?: string) => void;
  children: React.ReactElement<MenuItemBaseProps>[];
  classes?: string | string[];
}

const MenuComponent: React.FC<MenuProps> = ({
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

export const Menu = WithHidden<MenuProps>(MenuComponent);

export * from './MenuItem';
