import { usePostContext } from '../../contexts/PostContext';
import { useForm } from "../../hooks/useForm";

export const AddPost = () => {
    const { onAddPostSubmit } = usePostContext();  
  
    const { values, onChangeHandler, onSubmit } = useForm({
        title: '', 
        author: '',
        date: '',
        imageUrl: '',
        post: ''
    }, onAddPostSubmit);

    return (
        <section id="add-post" className="auth">
            <form method="POST" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Add Post</h1>
                    <label htmlFor="post-title">Post title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter post title..."
                        value={values.title}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="author">By:</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="Enter author name..."
                        value={values.author}
                        onChange={onChangeHandler}
                    />
                       <label htmlFor="date">Date:</label>
                    <input
                        type="text"
                        name="date"
                        placeholder="Enter date..."
                        value={values.date}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="post-img">Image:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        value={values.imageUrl}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="post">Post:</label>
                    <textarea name="post" value={values.post} onChange={onChangeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Add Post" />
                </div>
            </form>
        </section>
    );
};