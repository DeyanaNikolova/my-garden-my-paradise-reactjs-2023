import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { postServiceFactory } from '../../services/postService';
import { commentServiceFactory } from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';



export const PostDetails = () => {

    const { userId } = useContext(AuthContext);
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const postService = useService(postServiceFactory);
    const commentService = useService(commentServiceFactory);
    const navigate = useNavigate();


    useEffect(() => {
        postService.getPostById(postId)
            .then(result => {
                setPost(result);
            });
    }, [postId]);

    const onCommentSubmit = async () => {
      
        const newComment = await commentService.createComment(values);
        console.log(newComment);

        const addedComment = await postService.addComment(postId, {
            username,
            comment
        });
        setPost(state => ({ ...state, comments: { ...state.comments, [addedComment._id]: addedComment } }));
        setUsername('');
        setComment('');
    };
    const { values, onChangeHandler, onSubmit } = useForm({
        username: '',
        comment: ''
    }, onCommentSubmit);


    const onDeleteClick = async () => {
        await postService.del(post._id);

        navigate('/posts');
    };
    const isOwner = post._ownerId === userId;
    const isUser = userId !== post._ownerId;
    return (
        <section id="post-details">
            <h1>Post Details</h1>
            <div className="post-info-section">
                <div className="post-header">
                    <img className="post-img" src={post.imageUrl} />
                    <h1>{post.title}</h1>
                </div>

                <p className="text">{post.post}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {post.comments && Object.values(post.comments).map(x =>
                            <li key={x._id} className="comment">
                                <p>{x.username}: {x.comment}</p>
                            </li>
                        )}
                    </ul>
                    {/* {!Object.values(post.comments).length &&
                        <p className="no-comment">No comments.</p>
                    }  */}
                </div>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/update-post/${post._id}`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>
            {isUser && (
                <article className="add-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Type author's name"
                            value={values.username}
                            onChange={onChangeHandler}
                        />
                        <textarea
                            name="comment"
                            placeholder="Type your comment here"
                            value={values.comment}
                            onChange={onChangeHandler} >
                        </textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            )}

        </section>
    );
};