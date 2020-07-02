import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Item from './RadioItem';
import { WithClickType } from '../../hoc/WithClick';

export interface RadioBaseItemType extends WithClickType {
  active?: boolean;
}

export interface RadioProps {
  classes?: string | string[];
  children: ReactElement<RadioBaseItemType>[];
  value: string;
  onClick: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  classes,
  value,
  onClick,
  children,
}: RadioProps) => {
  const ProcessdChildren = children.map((child) => {
    const { props } = child;

    return React.cloneElement(child, {
      onClick: props.onClick || onClick,
      active: props.active || value === props.value,
    });
  });

  return <div className={clsx('Radio', classes)}>{ProcessdChildren}</div>;
};

export default Radio;
export const RadioItem = Item;
