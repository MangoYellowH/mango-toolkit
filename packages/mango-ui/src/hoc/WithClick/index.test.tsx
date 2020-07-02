import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import WithClick, { WithClickType } from '.';

interface MockComponentType extends WithClickType {
  text: string;
}

const MockComponent: React.FC<MockComponentType> = ({
  text,
}: MockComponentType) => {
  return <div>{text}</div>;
};

describe('WithClick Hoc', () => {
  beforeEach(cleanup);
  test('WithClick could wraper component, it also could be clicked and return key', () => {
    const WrappedComponent = WithClick<MockComponentType>(MockComponent);
    const mockFn = jest.fn();
    const mockKey = 'key';
    const mockText = 'text';
    const { container, getByText } = render(
      <WrappedComponent onClick={mockFn} value={mockKey} text={mockText} />,
    );

    expect(container.querySelector('.click-area')).toBeInTheDocument();
    fireEvent.click(getByText(mockText));
    expect(mockFn).toBeCalledWith(mockKey);
  });

  test('WithClick could wraper component, and return original component', () => {
    const mockText = 'text';
    const WrappedComponent = WithClick<MockComponentType>(MockComponent);
    const { container, getByText } = render(
      <WrappedComponent text={mockText} />,
    );
    expect(container.querySelector('.click-area')).not.toBeInTheDocument();
    expect(getByText(mockText)).toBeInTheDocument();
  });
});
