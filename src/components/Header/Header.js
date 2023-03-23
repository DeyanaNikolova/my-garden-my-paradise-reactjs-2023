import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
  const { isAuthenticated, email } = useContext(AuthContext);
  return (
    <header>
      <h1><Link className="home" to="/">My Garden</Link></h1>
      <nav>
        <Link to="/posts" className="nav-links" >All Posts</Link>
        {isAuthenticated && (
          <div id="user">
            <Link to="/add-post" className="nav-links" >Add Post</Link>
            <Link to="/logout" className="nav-links" >Logout</Link>
            <span className="nav-links" >{email}</span>
          </div>
        )}

        {!isAuthenticated && (
          <div id="guest">
            <Link to="/login" className="nav-links" >Login</Link>
            <Link to="/register" className="nav-links" >Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};