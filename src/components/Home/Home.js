import { useState, useEffect } from 'react';
import { LatestPosts} from './LatestPosts';


const url = 'http://localhost:3030/data/posts';
export const Home = () => {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(result =>{
            setLatestPosts(result);    
        })
    }, []);
    return (
        <section id="garden-home-page">
            <div className="welcome-message">
                <h3>Welcome to MY Garden - My Paradise</h3>
            </div>
            <img src="/images/gyufyufyu.png" alt="My Garden" />

            <div id="home-page">
                <h1>Latest Posts</h1>
                {/* {latestPosts.map(x =>
                    <LatestPosts key={x._id} {...x} />
                )}
                {latestPosts.length === 0 && (
                    <p className="no-posts">No posts yet</p>
                )} */}
            </div>
        </section>
    );
};