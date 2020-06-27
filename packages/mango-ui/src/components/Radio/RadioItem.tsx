import WitchClick, { WithClickType } from 'hoc/WithClick';
import React from 'react';
import clsx from 'clsx';


export interface RadioItemProps extends WithClickType {
  text: string;
  active: boolean;
}

const RadioItem: React.FC<RadioItemProps> = ({
  text,
  active,
}: RadioItemProps) => {
  return <div className={clsx('RadioItem', active && 'active')}>{text}</div>;
};

export default WitchClick<RadioItemProps>(RadioItem);
