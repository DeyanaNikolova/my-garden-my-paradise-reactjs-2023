
export const reducer = (state, action) => {
    switch (action.type) {
        case 'post_fetch':
            return { ...action.payload };
        case 'add_comment':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail,
                        }
                    }
                ],
            }
        default:
            return state;
    }
};