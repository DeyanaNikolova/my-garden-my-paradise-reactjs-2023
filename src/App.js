import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';

import { Header } from './components/Header/Header';
import { About } from './components/About/About.js';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Posts } from './components/Posts/Posts';
import { AddPost } from './components/AddPost/AddPost';
import { UpdatePost } from './components/UpdatePost/UpdatePost';
import { PostDetails } from './components/Posts/PostDetails';
import { RouteGuard } from './components/common/RouteGuard';
import { PostAuthor } from './components/common/PostAuthor';
import { Resources } from './components/Resources/Resources';
import { Search } from './components/Search/Search';


function App() {


  return (
    <AuthProvider>
      <PostProvider>
        <div id="box">
          <Header />

          <main id="main-container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />}/>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/posts/:postId' element={<PostDetails />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/search' element={<Search />} />

              <Route element={<RouteGuard />}>
                <Route path='/update-post/:postId' element={
                  <PostAuthor>
                     <UpdatePost />
                  </PostAuthor>
                } />
                <Route path='/add-post' element={<AddPost />} />
                <Route path='/logout' element={<Logout />} />

              </Route>
            </Routes>
          </main>

          <Footer />
        </div>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
