import { Link } from 'react-router-dom';

export const LatestPosts = ({
    _id,
    title,
    imageUrl,
   date
}) => {
    return (
        <div className="post">
        <div className="image-wrap">
            <img src={imageUrl} />
        </div>
        <h3>{title}</h3>
        <h2>Published on: {date}</h2>
        <div className="post-buttons">
            <Link to={`/posts/${_id}`} className="btn details-btn">Details</Link>
        </div>
    </div>
    );
};