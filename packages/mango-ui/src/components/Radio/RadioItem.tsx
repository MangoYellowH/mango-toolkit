import React from 'react';
import clsx from 'clsx';
import WitchClick from '../../hoc/WithClick';
import { RadioBaseItemType } from './index';

export interface RadioItemProps extends RadioBaseItemType {
  text: string;
}

const RadioItem: React.FC<RadioItemProps> = ({
  text,
  active,
}: RadioItemProps) => {
  return <div className={clsx('RadioItem', active && 'active')}>{text}</div>;
};

export default WitchClick<RadioItemProps>(RadioItem);
