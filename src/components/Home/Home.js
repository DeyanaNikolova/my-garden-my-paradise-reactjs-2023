
export const Home = () => {
    return (
        <section id="welcome-world">
        <div className="welcome-message">
            <h2>ALL new posts</h2>
            <h3>Welcome to MY Garden - My Paradise</h3>
        </div>
        <img src="" />

        <div id="home-page">
            <h1>Latest Posts</h1>

            {/* <!-- Display div: with information about every post (if any) --> */}
            <div className="post">
                <div className="image-wrap">
                    <img src="" />
                </div>
                <h3>Post Title</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buttons">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>
            <div className="post">
                <div className="image-wrap">
                    <img src="" />
                </div>
                <h3>Post Title</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buttons">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>
            <div className="post">
                <div className="image-wrap">
                    <img src="" />
                </div>
                <h3>MineCraft</h3>
                <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                <div className="data-buttons">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>

            {/* <!-- Display paragraph: If there is no posos  --> */}
            <p className="no-articles">No posts yet</p>
        </div>
    </section>
    )
}