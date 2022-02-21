import { render, screen } from '@testing-library/react';
import App from './GetRecipe';

it('renders card heading', () => {
  render(<App />);
  expect(screen.getByText('Recipe Conversion:')).toBeInTheDocument();
});