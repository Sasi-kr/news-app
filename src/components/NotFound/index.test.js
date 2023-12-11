import { render, screen } from '@testing-library/react';
import NotFound from './index';

test('test the not found page', () => {
  render(<NotFound />);
  const textElement = screen.getByText(`Uh oh, that page doesn't exist.😟😟😟`);
  expect(textElement).toBeInTheDocument();
});
