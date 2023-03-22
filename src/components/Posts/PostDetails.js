
export const PostDetails = () => {
    return (<section id="post-details">
        <h1>Post Details</h1>
        <div className="post-info-section">

            <div className="post-header">
                <img className="post-img" src={post.imageUrl} />
                <h1>{post.title}</h1>
            </div>

            <p className="text">{post.article}</p>


            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(x =>
                        <li key={x._id} className="comment">
                            <p>{x.username}: {x.comment}</p>
                        </li>
                    )}

                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
                {comments.length === 0 &&
                    <p className="no-comment">No comments.</p>
                }

            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this post )  --> */}
            <div className="buttons">
                <a href="/edit" className="button">Edit</a>
                <a href="/delete" className="button">Delete</a>
            </div>
        </div>

        {/* <!-- Bonus --> */}
        {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="add-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onCommentSubmit}>
                <input type="text" name="username" placeholder="John" value={username} onChange={(e) => setUsername(e.target.value)} />
                <textarea name="comment" placeholder="Type your comment here" value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>

    </section>
    );
};