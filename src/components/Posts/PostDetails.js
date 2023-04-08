import { useEffect, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { reducer } from '../../reducer/reducer';
import { postServiceFactory } from '../../services/postService';
import * as commentService from '../../services/commentService';
import { useAuthContext } from '../../contexts/AuthContext';
import { usePostContext } from '../../contexts/PostContext';
import { AddComment } from '../AddComment/AddComment';


export const PostDetails = () => {

    const { postId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const [post, dispatch] = useReducer(reducer, {});
    const postService = postServiceFactory();
    const { deletePost } = usePostContext();
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            postService.getPostById(postId),
            commentService.getAllComments(postId)
        ]).then(([postData, comments]) => {
            const postState = {
                ...postData,
                comments,
            };
            dispatch({ type: 'post_fetch', payload: postState });
        });
    }, [postId]);

    const onCommentSubmit = async (values) => {
        const result = await commentService.createComment(postId, values.comment);

        dispatch({
            type: 'add_comment', 
            payload: result,
            userEmail,
        });
   
        navigate(`/posts/${postId}`);
    };



    const onDeleteClick = async () => {
        const confirmend = window.confirm(`Are you sure you want to delete ${post.title}`);

        if(confirmend){
            await postService.deletePost(post._id);
            deletePost()
            navigate('/posts');
        }
      
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
                        {post.comments && post.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>
                    {!post.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/update-post/${post._id}`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>
            {!isOwner && isAuthenticated && (<AddComment onCommentSubmit={onCommentSubmit} />)}
        </section>
    );
};