import React from 'react';
import { render, screen } from '@testing-library/react';
import News from './';

test('test the input box', () => {
  render(<News />);
  const textElement = screen.getByText('Select Country:');
  expect(textElement).toBeInTheDocument();
});
