import { Link } from 'react-router-dom';

export const PostCard = ({
    _id,
    title,
    imageUrl,
}) => {
    return (
        <div className="post">
        <div className="image-wrap">
            <img src={imageUrl} />
        </div>
        <h3>{title}</h3>
        <div className="post-buttons">
            <Link to={`/posts/${_id}`} className="btn details-btn">Details</Link>
        </div>
    </div>
    );
};