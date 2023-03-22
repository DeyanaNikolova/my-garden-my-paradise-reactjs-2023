import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { useService } from '../../hooks/useService';
import { postServiceFactory } from '../../services/postService';

export const UpdatePost = ({
    onPostUpdateSubmit,
}) => {
    const { postId } = useParams();
    const postService = useService(postServiceFactory);

    const { values, onChangeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        author: '',
        imageUrl: '',
        post: ''
    }, onPostUpdateSubmit);

    return (
        <section id="update-post" className="auth">
            <form method="PUT" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Update Post</h1>
                    <label htmlFor="post-title">Post title:</label>
                    <input
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="author">By:</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="Author"
                        value={values.author}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="post-img">Image:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="post">Post :</label>
                    <textarea name="post" value={values.post} onChange={onChangeHandler} ></textarea>
                    <input className="btn submit" type="submit" value="Update Post" />

                </div>
            </form>
        </section>
    );
};