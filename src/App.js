import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


import * as postService from './postService/postService';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login';
import { Posts } from './components/Posts/Posts';
import { AddPost } from './components/AddPost/AddPost';
import { EditPost } from './components/EditPost/EditPost';


function App() {
  const navigate = useNavigate();
  const [posts, setPosts ] = useState([]);

  useEffect(() => {
    postService.getAllPost()
    .then(result =>{
      setPosts(result);
    })
  }, []);

  const onAddPostSubmit = async (postData) => {
    const newPost = postService.addPost(postData);

    setPosts(state => [...state, newPost]);
    navigate('/posts');
  };
  

  return (
    <div id="box">
      <Header />

      <main id="main-container">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/posts' element={<Posts posts={posts}/>}/>
          <Route path='/add-post' element={<AddPost onAddPostSubmit={onAddPostSubmit} />}/>
          <Route path='/edit-post/:postId' element={<EditPost />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </main>

    <Footer />
    </div>
  );
}

export default App;
