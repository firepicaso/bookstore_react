import { NavLink } from 'react-router-dom';
import user from '../assets/user.png';

const Header = () => (
  <header>
    <div className="App-header">
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
    </div>
    <div className="user-div">
      <img src={user} alt="user-icon" />
    </div>
  </header>
);

export default Header;
