import { requestFactory } from "./requester";


const baseUrl = 'http://localhost:3030/data/comments';

export const commentServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAllComments = async (postId) => {
        const query = encodeURIComponent(`postId="${postId}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);

        const result = await request.get(`${baseUrl}?where=${query}&load=${relationQuery}`);
        const comments = Object.values(result);
        return comments;
    }

    const createComment = async (postId, data) => {
        const result = await request.post(baseUrl, {postId, data });

        return result;
    };

    return {
        getAllComments,
        createComment
    };
};





