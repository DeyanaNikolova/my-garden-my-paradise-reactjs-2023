import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useService } from '../../hooks/useService';
import { postServiceFactory } from '../../services/postService';

export const UpdatePost = ({
    onPostUpdateSubmit,
}) => {

    const { postId } = useParams();
    const postService = useService(postServiceFactory);

    const [values, setValues] = useState({
        _id: '',
        title: '',
        author: '',
        imageUrl: '',
        post: ''
    });
    
    return (
        <section id="update-post" className="auth">
            <form id="edit">
                <div className="container">

                    <h1>Update Post</h1>
                    <label htmlFor="post-title">Post title:</label>
                    <input type="text" id="title" name="title" defaultValue="" />
                    
                    <label htmlFor="author">By:</label>
                    <input type="text" id="author" name="author" placeholder="Author" />

                    <label htmlFor="post-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

                    <label htmlFor="description">Post :</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Edit Post" />

                </div>
            </form>
        </section>
    )
};