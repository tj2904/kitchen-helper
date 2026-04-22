import { render, screen } from '@testing-library/react';
import App from './MeasurementConversion';

it('renders card heading', () => {
  render(<App />);
  expect(screen.getByText('Ingredient Measurement Conversion:')).toBeInTheDocument();
});