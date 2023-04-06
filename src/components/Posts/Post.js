import { Link } from 'react-router-dom';

export const Post = ({
    _id,
    title,
    date,
    imageUrl,
    author,
}) => {
 
    return (
        <div className="all-posts">
        <div className="all-posts-info">
            <img src={imageUrl} alt={title}/>
            <h2>Title: {title}</h2>
            <h6>Author: {author}</h6>
            <h6>Published on: {date}</h6>
            <Link to={`/posts/${_id}`} className="post-info-button">Details</Link>
        </div>
    </div>
    );
};