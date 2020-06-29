import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Example from '../Example';

describe('Radio Component', () => {
  beforeEach(cleanup);
  test('Radio could render correctly', () => {
    const { container } = render(<Example />);

    expect(container.querySelector('.Radio')).toBeInTheDocument();

    expect(container.querySelectorAll('.RadioItem').length).toBe(2);

    const firstItem = container.querySelector(
      '.click-area:nth-child(1) .RadioItem',
    );
    if (firstItem) fireEvent.click(firstItem);

    expect(
      container.querySelector('.click-area:nth-child(1) .RadioItem'),
    ).toHaveClass('active');

    const secondItem = container.querySelector(
      '.click-area:nth-child(2) .RadioItem',
    );
    if (secondItem) fireEvent.click(secondItem);
    expect(
      container.querySelector('.click-area:nth-child(2) .RadioItem'),
    ).toHaveClass('active');

    expect(
      container.querySelector('.click-area:nth-child(1) .RadioItem'),
    ).not.toHaveClass('active');
  });
});
