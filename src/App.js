import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { AuthProvider } from './contexts/AuthContext';
import { postServiceFactory } from './services/postService';


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


function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
 
  const postService = postServiceFactory(auth.accessToken);
 

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






  return (
    <AuthProvider>
      <div id="box">
        <Header />

        <main id="main-container">
          <Routes>
            <Route path='/' element={<Home posts={posts} />} />
            <Route path='/posts' element={<Posts posts={posts} />} />
            <Route path='/posts/:postId' element={<PostDetails />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            <Route element={<RouteGuard />} >
            <Route path='/update-post/:postId' element={<UpdatePost />} />
            <Route path='/add-post' element={<AddPost />} />

            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
