import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './index';

describe('Header Component', () => {
  beforeEach(cleanup);
  test('Header structure is render correctly', () => {
    const { container } = render(
      <Header>
        <div className="children">mock children</div>
      </Header>,
    );
    expect(container.querySelector('.header')).toBeInTheDocument();
    expect(
      container.querySelector('.header>.header-content'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.header>.header-content>.children'),
    ).toBeInTheDocument();
  });
});
