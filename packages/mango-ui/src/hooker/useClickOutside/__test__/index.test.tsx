import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useClickOutside from '..';

describe('useClickOutside hooker', () => {
  beforeEach(cleanup);
  test('useClickOutside could work correctly', async () => {
    const mockRef = {
      current: {
        contains: jest.fn(() => false),
      },
    } as unknown as React.RefObject<HTMLElement>;

    const mockfn = jest.fn();

    const MockComponent: React.FC = () => {
      useClickOutside(mockRef, mockfn);
      return <></>;
    };

    const { getByText } = render(
      <>
        <MockComponent />
        <div>outside</div>
      </>,
    );

    userEvent.click(getByText('outside'));

    await waitFor(() => {
      expect(mockfn).toBeCalled();
    });
  });
});
