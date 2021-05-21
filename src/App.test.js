import { render, screen } from '@testing-library/react';
import App from './App';

test('has a submit button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Submit/i);
  expect(linkElement).toBeInTheDocument();
});
