import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

export enum ButtonType {
  default = 'default',
  primary = 'primary',
  error = 'error',
}

export interface ButtonProps {
  type?: string | ButtonType;
  classes?: string | string[];
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'default',
  classes,
  disabled,
}: ButtonProps): ReactElement<ButtonProps> => (
  <button
    type="button"
    className={clsx('Button', type, classes)}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
