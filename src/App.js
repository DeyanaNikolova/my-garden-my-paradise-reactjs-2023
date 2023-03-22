import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { postServiceFactory } from './services/postService';
import { authServiceFactory } from './services/authService';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login';
import { Posts } from './components/Posts/Posts';
import { AddPost } from './components/AddPost/AddPost';
import { UpdatePost } from './components/UpdatePost/UpdatePost';


function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useState({});
  const postService = postServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);

  useEffect(() => {
    postService.getAllPost()
      .then(result => {
        setPosts(result);
      })
  }, []);

  const onAddPostSubmit = async (postData) => {
    const newPost = postService.addPost(postData);

    setPosts(state => [...state, newPost]);
    navigate('/posts');
  };

  const onLoginSubmit = async (data) => {
    const result = await authService.login(data);
    setAuth(result);
    navigate('/posts');
  };

  const onRegisterSubmit = async (data) => {
    const result = await authService.post(data);

  }

  const contex = {
    onLoginSubmit,
    userId: auth._id,
    email: auth.email,
    token: auth.accessToken,
    isAuthenticated: !!auth.accessToken

  };

  return (
    <AuthContext.Provider value={contex}>
      <div id="box">
        <Header />

        <main id="main-container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts posts={posts} />} />
            <Route path='/add-post' element={<AddPost onAddPostSubmit={onAddPostSubmit} />} />
            <Route path='/update-post/:postId' element={<UpdatePost />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
