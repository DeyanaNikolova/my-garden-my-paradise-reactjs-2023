import { Post } from './Post';


export const Posts = ({
    posts
}) => {
    return (
        <section id="posts-page">
            <h1>All Posts</h1>
            {posts.length === 0 && (
                <div className="loader">
                    <div><img src="/images/loading.gif" alt="#" /></div>
                </div>
            )}

            {posts.map(x =>
                <Post key={x._id} {...x} />
            )}

            {posts.length === 0 && (
                <h3 className="no-posts">No posts yet</h3>
            )}
        </section>
    );
};