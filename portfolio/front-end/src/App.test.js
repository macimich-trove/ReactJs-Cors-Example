import { render, screen } from '@testing-library/react';
import App from './App';

test('renders api content', () => {
  render(<App />);
  const linkElement = screen.getByText(//i);
  expect(linkElement).toBeInTheDocument();
});



test('TODO', () => {
x = "TODO"
expect(x).toBe("TODO");
});
