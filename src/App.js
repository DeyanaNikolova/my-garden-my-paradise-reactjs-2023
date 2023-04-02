import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login';
import { Posts } from './components/Posts/Posts';
import { AddPost } from './components/AddPost/AddPost';
import { UpdatePost } from './components/UpdatePost/UpdatePost';
import { PostDetails } from './components/Posts/PostDetails';
import { RouteGuard } from './components/common/RouteGuard';
import { PostProvider } from './contexts/PostContext';
import { PostAuthor } from './components/common/PostAuthor';


function App() {


  return (
    <AuthProvider>
      <PostProvider>
        <div id="box">
          <Header />

          <main id="main-container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/posts' element={<Posts />} />
              <Route path='/posts/:postId' element={<PostDetails />} />

              <Route element={<RouteGuard />}>
                <Route path='/update-post/:postId' element={
                  <PostAuthor>
                    <UpdatePost />
                  </PostAuthor>
                } />
                <Route path='/add-post' element={<AddPost />} />

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
