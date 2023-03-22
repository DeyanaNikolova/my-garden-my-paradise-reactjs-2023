
export const Home = () => {
    return (
        <section id="garden-home-page">
        <div className="welcome-message">
            <h3>Welcome to MY Garden - My Paradise</h3>
        </div>
        <img src="/images/gyufyufyu.png" alt="My Garden" />

        <div id="home-page">
            <h1>Latest Posts</h1>

            {/* <!-- Display div: with information about every post (if any) --> */}
            <div className="post">
                <div className="image-wrap">
                    <img src="" />
                </div>
                <h3>Post Title</h3>
                <div className="post-buttons">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>
            <div className="post">
                <div className="image-wrap">
                    <img src="" />
                </div>
                <h3>Post Title</h3>
                <div className="post-buttons">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>
            <div className="post">
                <div className="image-wrap">
                    <img src="" />
                </div>
                <h3>Post Title</h3>
                <div className="post-buttons">
                    <a href="#" className="btn details-btn">Details</a>
                </div>
            </div>

            {/* <!-- Display paragraph: If there is no posos  --> */}
            <p className="no-posts">No posts yet</p>
        </div>
    </section>
    )
}