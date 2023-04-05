import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { postServiceFactory } from '../services/postService';

export const PostContext = createContext();

export const PostProvider = ({
  children,
}) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const postService = postServiceFactory();

  useEffect(() => {
    postService.getAllPost()
        .then(result => {
            setPosts(result);
           // navigate('/posts');
        });
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

  const deletePost = (postId) => {
    setPosts(state => state.filter(p => p._id !== postId));
  };

  const getPostById = (postId) => {
    return posts.find(p => p._id === postId);
  };

  const context = {
    posts,
    onAddPostSubmit,
    onPostUpdateSubmit,
    deletePost,
    getPostById
  };

  return (
    <PostContext.Provider value={context}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  const context = useContext(PostContext);

  return context;
};