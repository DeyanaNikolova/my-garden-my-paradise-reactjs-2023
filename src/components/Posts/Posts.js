import { Post } from './Post';
import { style } from './allPosts.module.css';

export const Posts = ({
    posts
}) => {
    return (
        <section id="posts-page">
        <h1>All Posts</h1>

        {posts.map(x =>
            <Post key={x._id} {...x} />
        )}

        {posts.length === 0 && (
            <h3 className="no-articles">No articles yet</h3>
        )}
    </section>
    );
};