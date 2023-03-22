import { Link } from 'react-router-dom';

export const Post = ({
    _id,
    title,
    imageUrl,
    author
}) => {
    return (
        <div className="all-posts">
        <div className="all-posts-info">
            <img src={imageUrl} alt={title}/>
            <h6>{author}</h6>
            <h2>{title}</h2>
            <Link to={`/posts/${_id}`} className="post-info-button">Post Info</Link>
        </div>
    </div>
    );
};