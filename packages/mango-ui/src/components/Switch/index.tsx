import React from 'react';
import clsx from 'clsx';

export interface SwitchProps {
  classes?: string | string[];
}

const Switch: React.FC<SwitchProps> = ({ classes }: SwitchProps) => {
  return <div className={clsx('Switch', classes)}>switch</div>;
};

export default Switch;
