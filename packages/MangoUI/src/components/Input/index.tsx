import React, { ReactElement } from 'react';
import clsx from 'clsx';

interface InputProps {
  type?: string;
  classes?: string | string[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  classes,
  placeholder,
  value,
  onChange,
}: InputProps): ReactElement<InputProps> => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <input
      className={clsx(classes)}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
