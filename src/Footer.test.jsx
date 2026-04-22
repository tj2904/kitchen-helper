import { render, screen } from '@testing-library/react';
import App from './Footer';

it('checks for link to Spoonacular', () => {
  render(<App />);
  const linkElement = screen.getByText(/Spoonacular/i);
  expect(linkElement).toBeInTheDocument();
});