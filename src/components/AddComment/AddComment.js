import { useForm } from '../../hooks/useForm';

export const AddComment = ({
    onCommentSubmit
}) => {

    const { values, onChangeHandler, onSubmit } = useForm({
        comment: ''
    }, onCommentSubmit);

    return (
        <article className="add-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onSubmit}>
            {/* <input
                type="text"
                name="email"
                placeholder="Type author's email"
                value={values.author}
                onChange={onChangeHandler}
            /> */}
            <textarea
                name="comment"
                placeholder="Type your comment here"
                value={values.comment}
                onChange={onChangeHandler} >
            </textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
        </form>
    </article>
    );
};