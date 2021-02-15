import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from 'components/Layout/App';

test('renders home text', () => {
  render(
    <App />
  );
  const linkElement = screen.getByText(/An extremely fast JavaScript bundler/i);
  expect(linkElement).toBeInTheDocument();
});
