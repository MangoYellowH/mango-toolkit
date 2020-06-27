import React from 'react';
import clsx from 'clsx';
import Item from './RadioItem';

export interface RadioItemType {
  value: string;
  text: string;
}

export interface RadioProps {
  classes?: string | string[];
  items: RadioItemType[];
  value: string;
  onClick: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  classes,
  items,
  value,
  onClick,
}: RadioProps) => {
  return (
    <div className={clsx('Radio', classes)}>
      {items.map((item) => {
        return (
          <Item
            value={item.value}
            text={item.text}
            onClick={onClick}
            active={value === item.value}
            key={item.value}
          />
        );
      })}
    </div>
  );
};

export default Radio;
export const RadioItem = Item;
