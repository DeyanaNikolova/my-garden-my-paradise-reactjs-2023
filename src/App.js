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
import { PostDetails } from './components/Posts/PostDetails';


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

  const onPostUpdateSubmit = async (data) => {
    const result = await postService.updatePost(data._id, data);

    setPosts(state => state.map(p => p._id === data._id ? result : p));
    navigate(`/posts/${data._id}`);
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);

      navigate('/');

    } catch (err) {
      console.log(err);
    }
  };

  const onRegisterSubmit = async (data) => {
    const { repass, ...registerData } = data;

    if (repass !== registerData.password) {
      return;
    }
    try {
      const result = await authService.register(registerData);

      setAuth(result);
      navigate('/');

    } catch (err) {
      console.log(err.message);
    }
  }

  const contex = {
    onLoginSubmit,
    onRegisterSubmit,
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
            <Route path='/' element={<Home posts={posts} />} />
            <Route path='/posts' element={<Posts posts={posts} />} />
            <Route path='/add-post' element={<AddPost onAddPostSubmit={onAddPostSubmit} />} />
            <Route path='/update-post/:postId' element={<UpdatePost onPostUpdateSubmit={onPostUpdateSubmit} />} />
            <Route path='/posts/:postId' element={<PostDetails />} />
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
