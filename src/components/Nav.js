import '../App.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="nav">
      <h2>Math Magicians</h2>
      <ul className="linkClass">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/calculator" className="links">
            Calculator
          </Link>
        </li>
        <li id="quoteLink">
          <Link to="/quote" className="links">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
