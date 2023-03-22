

export const EditPost = () => {
    return (
        <section id="update-post" className="auth">
            <form id="edit">
                <div className="container">

                    <h1>Edit Post</h1>
                    <label htmlFor="post-title">Post title:</label>
                    <input type="text" id="title" name="title" defaultValue="" />
                    
                    <label htmlFor="author">By:</label>
                    <input type="text" id="author" name="author" placeholder="Author" />

                    <label htmlFor="post-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />

                    <label htmlFor="description">Post :</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Edit Post" />

                </div>
            </form>
        </section>
    )
};