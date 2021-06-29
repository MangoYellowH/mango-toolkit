import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MenuItem } from '../index';

describe('MenuItem Component', () => {
  beforeEach(cleanup);
  test('MenuItem could render correctly', () => {
    const mockLabel = 'menuLabel';
    const mockClass = 'testClass';
    const mockValue = 'menuValue';
    const mockClick = jest.fn();
    const { getByText } = render(
      <MenuItem
        label={mockLabel}
        value={mockValue}
        onClick={mockClick}
        classes="testClass"
      />,
    );

    const menuItemEle = getByText(mockLabel);

    expect(menuItemEle).not.toBeNull();

    expect(menuItemEle).toHaveClass(mockClass);

    fireEvent.click(menuItemEle);

    expect(mockClick).toBeCalledWith(mockValue);
  });
});
