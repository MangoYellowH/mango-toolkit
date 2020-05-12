import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WithTheme from '../WithTheme';

describe('WithTheme', () => {
  beforeEach(cleanup);
  test('test WithTheme could wrapper correctly', () => {
    const Mock: React.FC<{}> = () => <div data-testid="mock">mock</div>;
    const mockStyle = 'mockStyle';
    const Wrapper = WithTheme<{}>(Mock, mockStyle);
    const { container, getByTestId } = render(<Wrapper />);
    expect(container.firstChild).not.toBeNull();
    expect(container.querySelector(`.${mockStyle}`)).not.toBeNull();
    expect(getByTestId('mock')).toHaveTextContent('mock');
  });
});
