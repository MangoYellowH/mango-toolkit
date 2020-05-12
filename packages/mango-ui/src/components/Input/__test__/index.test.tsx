import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Input from '..';

describe('Input Component', () => {
  beforeEach(cleanup);
  test('test input could input value and return the value by on change', () => {
    const inputClass = 'InputClass';
    const inputValue = 'mockValue';
    const inputValueChanged = 'mockValueChanged';
    const inputPlaceHolder = 'mockPlaceHolder';
    const mockFn = jest.fn((val: string): void => {
      expect(val).toBe(inputValueChanged);
    });
    const { queryByPlaceholderText } = render(
      <Input
        classes={inputClass}
        onChange={mockFn}
        value={inputValue}
        placeholder={inputPlaceHolder}
      />,
    );
    const element = queryByPlaceholderText(
      inputPlaceHolder,
    ) as HTMLInputElement;

    expect(element).toHaveClass(inputClass);

    expect(element.value).toBe(inputValue);

    fireEvent.change(element, { target: { value: inputValueChanged } });

    expect(mockFn).toBeCalledTimes(1);
  });
});
