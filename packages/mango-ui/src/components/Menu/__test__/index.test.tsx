import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Menu, { MenuItem } from '../index';

describe('Menu Component', () => {
  beforeEach(cleanup);
  test('Menu could render correctly', () => {
    const mockClick = jest.fn();
    const mockClass = 'mockClass';

    const mockItemClass = 'mockItemClass';

    const mockMenuConfig = [
      {
        label: 'label1',
        value: 'value1',
      },
      {
        label: 'label2',
        value: 'value2',
      },
    ];

    const { container } = render(
      <Menu onClick={mockClick} classes={mockClass}>
        {mockMenuConfig.map(({ label, value }) => (
          <MenuItem
            label={label}
            value={value}
            key={value}
            classes={mockItemClass}
          />
        ))}
      </Menu>,
    );

    const menuEle = container.querySelector(`.${mockClass}`);

    expect(menuEle).not.toBeNull();

    const menuItemEles = container.querySelectorAll(`.${mockItemClass}`);

    expect(menuItemEles.length).toEqual(mockMenuConfig.length);

    const secondItemEle = container.querySelector(
      `.click-area:nth-child(2) .${mockItemClass}`,
    );

    if (secondItemEle) fireEvent.click(secondItemEle);

    expect(mockClick).toBeCalledWith(mockMenuConfig[1].value);
  });
});
