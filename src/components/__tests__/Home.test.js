import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home component', () => {
  test('renders welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/welcome to our page/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('applies correct styling to welcome message', () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/welcome to our page/i);
    expect(welcomeMessage).toHaveStyle({
      fontSize: '22px',
      fontWeight: '600',
      marginBottom: '2rem',
      lineHeight: '1em',
      color: '#000',
      textTransform: 'lowercase',
      textAlign: 'center',
      marginLeft: '-14rem',
    });
  });
});
