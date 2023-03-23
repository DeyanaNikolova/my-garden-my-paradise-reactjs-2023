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

    const createComment = async (data) => {
        const result = await request.post(baseUrl, data);

        return result;
    };

    return {
        getAllComments,
        createComment
    };
};





