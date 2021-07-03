import clsx from 'clsx';
import React, { useRef } from 'react';
import useClickOutside from '../../hooker/useClickOutside';
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
  setHidden,
}: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => {
    if (setHidden) {
      setHidden(true);
    }
  });

  return (
    <div className={clsx('Menu', classes)} ref={menuRef}>
      {appendClickEvent(children, onClick)}
    </div>
  );
};

export const Menu = WithHidden<MenuProps>(MenuComponent);

export * from './MenuItem';
