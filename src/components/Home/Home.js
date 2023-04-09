import { useState, useEffect } from 'react';
import { LatestPosts } from './LatestPosts';


const url = 'http://localhost:3030/data/posts';
export const Home = () => {
    const querySort = encodeURIComponent("_createdOn");
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        fetch(`${url}?sortBy=${querySort} desc`)
            .then(res => res.json())
            .then(result => {
                const sliced = result.splice(0, 6)

                setLatestPosts(sliced);
            });
    }, []);


    return (
        <section id="garden-home-page">
            <div className="welcome-message">
                <h3>Welcome to MY Garden - My Paradise</h3>
                <p>Here you will find posts from the most passionate gardeners around the world. You are more than welcome to join us and share your thoughts.</p>
            </div>

            <img id="img-home-page" src="/images/gyufyufyu.png" alt="My Garden" />

            <div id="home-page">
                <h1>Latest Posts</h1>
                {latestPosts.map(x =>
                    <LatestPosts key={x._id} {...x} />
                )}
                {latestPosts.length === 0 && (
                    <p className="no-posts">No posts yet</p>
                )}
            </div>
        </section>
    );
};