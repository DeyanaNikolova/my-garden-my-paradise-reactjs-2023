import { useEffect, useState } from 'react';
import { postServiceFactory } from '../../services/postService';

import { Post } from './Post';


export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const postService = postServiceFactory();
    
    useEffect(()=> {
        postService.getAllPost()
        .then(result =>{
            setPosts(result);
        })
    }, []);
  
    return (
        <section id="posts-page">
            <h1>All Posts</h1>
            {posts.map(x => 
                <Post key={x._id} {...x} />
            )}

            {posts.length === 0 && (
                <h3 className="no-posts">No posts yet</h3>
            )}
        </section>
    );
};