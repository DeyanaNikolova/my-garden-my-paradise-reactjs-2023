import { useState, useEffect } from 'react';
import { LatestPosts} from './LatestPosts';


const url = 'http://localhost:3030/data/posts';
export const Home = () => {
    const querySort = encodeURIComponent("_createdOn");
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(()=> {
        fetch(`${url}?sortBy=${querySort} desc`)
        .then(res => res.json())
        .then(result =>{
            const sliced = result.splice(0, 3)
        
            setLatestPosts(sliced);    
        });
    }, []);

 
    return (
        <section id="garden-home-page">
            <div className="welcome-message">
                <h3>Welcome to MY Garden - My Paradise</h3>
            </div>
            <img src="/images/gyufyufyu.png" alt="My Garden" />

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