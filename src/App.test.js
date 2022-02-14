import { render, screen } from '@testing-library/react';
import App from './App';

test('renders kitchen helper link', () => {
  render(<App />);
  const linkElement = screen.getByText(/kitchen helper/i);
  expect(linkElement).toBeInTheDocument();
});
