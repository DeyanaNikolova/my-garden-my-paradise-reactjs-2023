import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { postServiceFactory } from '../../services/postService';
import { commentServiceFactory } from '../../services/commentService';
import { AuthContext } from '../../contexts/AuthContext';
import { usePostContext } from '../../contexts/PostContext';


export const PostDetails = () => {

    const { userId, isAuthenticated } = useContext(AuthContext);
    const commentService = commentServiceFactory();
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState('');
    const postService = postServiceFactory();
    const { deletePost } = usePostContext();
    const navigate = useNavigate();


    useEffect(() => {
        Promise.all([
            postService.getPostById(postId),
            commentService.getAllComments(postId)
        ]).then(([postData, comments]) => {
             setPost(state => ({...state, ...postData,  comments:[...comments]}));
            setComment(comments);
           console.log(post);
        });
    }, [postId]);

    const onCommentSubmit = async (values) => {

        const result = await commentService.createComment(postId, values);
     
        const newComment = Object.values(result.data);
         setPost(state => ({...state, comments: {...newComment}}));
        setComment('');
        navigate(`/posts/${postId}`);
    };
    const { values, onChangeHandler, onSubmit } = useForm({
        author: '',
        comment: ''
    }, onCommentSubmit);


    const onDeleteClick = async () => {
        await postService.deletePost(post._id);
        deletePost()
        navigate('/posts');
    };
    
    const isOwner = post._ownerId === userId;

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
                        {comment && Object.values(comment).map(x=> (
                            <li key={x._id} className="comment">
                                <p>{x.data.author}: {x.data.comment}</p>
                            </li>
                        ))}
                    </ul>
                    {comment?.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/update-post/${post._id}`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
                {!isOwner && isAuthenticated && (
                    <article className="add-comment">
                        <label>Add new comment:</label>
                        <form className="form" onSubmit={onSubmit}>
                            <input
                                type="text"
                                name="author"
                                placeholder="Type author's name"
                                value={values.author}
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
            </div>
        </section>
    );
};