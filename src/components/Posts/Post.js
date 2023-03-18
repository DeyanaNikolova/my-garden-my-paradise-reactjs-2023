import { Link } from 'react-router-dom';

export const Post = ({
    _id,
    title,
    imageUrl,
    article
}) => {
    return (
        <div className="allPosts">
        <div className="allPosts-info">
            <img src={imageUrl} />
            <h6>{article}</h6>
            <h2>{title}</h2>
            <Link to={`/posts/${_id}`} className="details-button">Post Info</Link>
        </div>
    </div>
    );
};