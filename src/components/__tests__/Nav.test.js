import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Nav';

describe('Navbar', () => {
  it('renders Navbar correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'Calculator' });
    const contactLink = screen.getByRole('link', { name: 'Quote' });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
