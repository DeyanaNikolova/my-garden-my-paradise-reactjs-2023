import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
  const { isAuthenticated, email } = useContext(AuthContext);
  return (
    <header>
      <h1><Link className="home" to="/">My Garden</Link></h1>
      <nav>
        <Link to="/posts">All Posts</Link>
        {isAuthenticated && (
          <div id="user">
            <Link to="/add-post">Add Post</Link>
            <Link to="/logout">Logout</Link>
            <span>{email}</span>
          </div>
        )}

        {!isAuthenticated && (
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};