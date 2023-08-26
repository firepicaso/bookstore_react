import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <h1>Bookstore CMS</h1>
    <nav>
      <ul className="nav">
        <li>
          <NavLink className="nav-text" to="/">BOOKS</NavLink>
        </li>
        <li className="nav-text">
          <NavLink className="nav-text" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
