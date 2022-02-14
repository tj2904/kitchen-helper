import { render, screen } from '@testing-library/react';
import App from './TemperatureConversion';

it('renderscard heading', () => {
  render(<App />);
  expect(screen.getByText('Oven Temperature Conversion:')).toBeInTheDocument();
});