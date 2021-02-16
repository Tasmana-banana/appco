import { render, screen } from '@testing-library/react';
import App from './App';

test('check that title is present', () => {
  render(<App />);
  const linkElement = screen.getByText('Congratulations you application is up and running!');
  expect(linkElement).toBeInTheDocument();
});
