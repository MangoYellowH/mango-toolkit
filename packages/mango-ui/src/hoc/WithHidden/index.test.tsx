import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WithHidden, WithHiddenType } from '.';

describe('WithHidden Hoc', () => {
  beforeEach(cleanup);

  const MockComponent: React.FC<WithHiddenType> = () => {
    return <div>mock component</div>;
  };

  const TestedComponent = WithHidden<WithHiddenType>(MockComponent);

  test('WithHidden wraper component could hide the component', () => {
    const { container } = render(<TestedComponent hidden />);

    expect(container).not.toHaveTextContent('mock component');
  });

  test('WithHidden wraper component could show original component', () => {
    const { container } = render(<TestedComponent />);

    expect(container).toHaveTextContent('mock component');
  });
});
