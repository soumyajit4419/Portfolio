import { render, screen } from '@testing-library/react';

import App from './App';

test('renders about link', () => {
  render(<App />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
