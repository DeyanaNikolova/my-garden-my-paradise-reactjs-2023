import { PostCard } from './PostCard';

export const Home = ({
    posts
}) => {
    return (
        <section id="garden-home-page">
            <div className="welcome-message">
                <h3>Welcome to MY Garden - My Paradise</h3>
            </div>
            <img src="/images/gyufyufyu.png" alt="My Garden" />

            <div id="home-page">
                <h1>Latest Posts</h1>
                {posts.map(x =>
                    <PostCard key={x._id} {...x} />
                )}
                {posts.length === 0 && (
                    <p className="no-posts">No posts yet</p>
                )}
            </div>
        </section>
    );
};