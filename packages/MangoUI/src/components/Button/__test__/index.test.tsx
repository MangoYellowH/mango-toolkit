import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from '..';

describe('Button Component', () => {
  beforeEach(cleanup);
  test('test button could be clicked, add class, append children', () => {
    const mockLabel = 'mockLable';
    const buttonClass = 'buttonClass';
    const mockFn = jest.fn();
    const { container, getByText } = render(
      <Button
        classes={buttonClass}
        onClick={mockFn}
      >
        { mockLabel }
      </Button>,
    );
    // the button has been rendered
    const buttonElement = getByText(mockLabel);
    expect(buttonElement).not.toBeNull();

    // the children label is displayed
    expect(getByText(mockLabel)).toBe(container.querySelector('Button'));

    // the class has been append
    expect(buttonElement).toHaveClass(buttonClass);

    // the click event has trigger
    fireEvent.click(buttonElement);
    expect(mockFn).toBeCalled();
  });

  test('test button disabled ', () => {
    const mockLabel = 'mockLable';
    const mockFn = jest.fn();
    const { getByText } = render(
      <Button
        onClick={mockFn}
        disabled
      >
        { mockLabel }
      </Button>,
    );
    // the button has been rendered
    const buttonElement = getByText(mockLabel);
    expect(buttonElement).not.toBeNull();

    // the click event has trigger
    fireEvent.click(buttonElement);
    expect(mockFn).not.toBeCalled();

    // element is disabled
    expect(buttonElement).toBeDisabled();
  });
});
