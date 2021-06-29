import React from 'react';
import clsx from 'clsx';
import { WithClick } from '../../hoc/WithClick';
import { RadioBaseItemType } from './index';

export interface RadioItemProps extends RadioBaseItemType {
  text: string;
}

const RadioItemComponent: React.FC<RadioItemProps> = ({
  text,
  active,
}: RadioItemProps) => {
  return <div className={clsx('RadioItem', active && 'active')}>{text}</div>;
};

export const RadioItem = WithClick<RadioItemProps>(RadioItemComponent);
