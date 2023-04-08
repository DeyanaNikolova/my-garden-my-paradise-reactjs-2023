import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);
  return (
    <header>
      <h1><Link className="home" to="/">My Garden</Link></h1>

      <nav>
        <Link to="/about" className="nav-links">About</Link>
        <Link to="/posts" className="nav-links" >All Posts</Link>
        <Link to="/resources" className="nav-links">Resources</Link>
        <Link to="/search" className="nav-links">Serach</Link>
        {isAuthenticated && (
          <div id="user">
            <Link to="/add-post" className="nav-links" >Add Post</Link>
            <Link to="/logout" className="nav-links" >Logout</Link>
            <span className="nav-links" >Welcome {userEmail}</span>
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