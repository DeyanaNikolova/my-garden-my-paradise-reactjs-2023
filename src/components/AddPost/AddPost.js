import { useState } from 'react';

export const AddPost = ({
    onAddPostSubmit,
}) => {

    const [values, setValues] = useState({
        title: '',
        author: '',
        imageUrl: '', 
        post: ''
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.tatget.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAddPostSubmit(values);
    }

    return (
        <section id="add-post" className="auth">
        <form id="create" onSubmit={onSubmit}>
            <div className="container">

                <h1>Add Post</h1>
                <label htmlFor="post-title">Post title:</label>
                <input value={values.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter post title..." />

                <label htmlFor="author">By:</label>
                <input value={values.author} onChange={onChangeHandler} type="text" name="author" placeholder="Enter author name..." />

                <label htmlFor="post-img">Image:</label>
                <input value={values.imageUrl} onChange={onChangeHandler} type="text" name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="post">Post:</label>
                <textarea name="post" value={values.post} onChange={onChangeHandler}></textarea>
                <input className="btn submit" type="submit" value="Add Post" />
            </div>
        </form>
    </section>
    );
};