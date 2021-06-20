import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Animation from '../index';

describe('Animation Component', () => {
  beforeEach(cleanup);
  test('test animation Component, class correctly added', () => {
    const { container } = render(
      <Animation>
        <div>mock component</div>
      </Animation>,
    );
    const animationEle = container.querySelector('.animation');
    expect(animationEle).toBeInTheDocument();
    expect(animationEle).toHaveClass('initial');
  });
});
