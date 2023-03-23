import { requestFactory } from "./requester";


const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAllComments = async (postId) => {
        const query = encodeURIComponent(`postId="${postId}"`);

        const result = await request.get(`${baseUrl}?where=${query}`);
        const comments = Object.values(result);
        return comments;
    }

    const addComment = async (postId, data) => {
        const comment = await request.post(`${baseUrl}/${postId}`, data);

        return comment;
    };

    return {
        getAllComments,
        addComment
    };
};





