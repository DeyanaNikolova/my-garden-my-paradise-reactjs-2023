import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { postServiceFactory } from '../../services/postService';
import { useService } from '../../hooks/useService';
import { AuthContext } from '../../contexts/AuthContext';


export const PostDetails = () => {

    const { userId } = useContext(AuthContext);
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const postService = useService(postServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        postService.getPostById(postId)
            .then(result => {
                setPost(result);
            });
    }, [postId]);

    const onCommentSubmit = async (e) => {
        e.preventDefault();
        if (userId !== postId._ownerId) {

        }
        const newComment = await postService.addComment(postId, {
            username,
            comment
        });
        console.log(newComment);
        setPost(state => ({ ...state, comments: { ...state.comments, [newComment._id]: newComment } }));
        setUsername('');
        setComment('');
    };

    const onDeleteClick = async () => {
        await postService.del(post._id);

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
                        {/* {post.comments.map(x =>
                            <li key={x._id} className="comment">
                                <p>{x.username}: {x.comment}</p>
                            </li>
                        )} */}

                        <li className="comment">
                            <p>Content: </p>
                        </li>
                    </ul>
                    {/* {post.comments.length === 0 &&
                        <p className="no-comment">No comments.</p>
                    } */}
                </div>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/update-post/${post._id}`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>
            <article className="add-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <input type="text" name="username" placeholder="Author name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea name="comment" placeholder="Type your comment here" value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
};