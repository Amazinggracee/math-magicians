import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('renders the correct copyright message', () => {
    render(<Footer />);
    const copyright = screen.getByText(/Copyrigth &copy Amazinggracee 2023/i);
    expect(copyright).toBeInTheDocument();
  });
});
