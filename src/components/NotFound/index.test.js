import { render, screen } from '@testing-library/react';
import NotFound from './index';

test('testthenotfoundpage', () => {
  render(<NotFound />);
  const textElement = screen.getByText(`Uh oh, that page doesn't exist.😟😟😟`);
  expect(textElement).toBeInTheDocument();
});
