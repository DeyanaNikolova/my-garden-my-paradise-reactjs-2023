import { usePostContext } from '../../contexts/PostContext';
import { Post } from './Post';


export const Posts = () => {
    const { posts } = usePostContext();
    
    return (
        <section id="posts-page">
            <h1>All Posts</h1>
            {posts.map(x =>
                <Post key={x._id} {...x} />
            )}

            {posts.length === 0 && (
                <h3 className="no-posts">No posts yet</h3>
            )}
        </section>
    );
};