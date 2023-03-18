

export const Header = () => {
    return (
        <header>
        {/* <!-- Navigation --> */}
        <h1><Link className="home" to="/">My Garden</Link></h1>
        <nav>
          <Link to="/posts">All Posts</Link>
          {/* <!-- Logged-in users --> */}
          <div id="user">
            <Link to="/add-post">Add Post</Link>
            <Link to="/logout">Logout</Link>
          </div>
          {/* <!-- Guest users --> */}
          <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>
    );
}