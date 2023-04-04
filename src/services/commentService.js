import { requestFactory } from "./requester";


const baseUrl = 'http://localhost:3030/data/comments';


const request = requestFactory();

export const getAllComments = async (postId) => {
    const query = encodeURIComponent(`postId="${postId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${query}&load=${relationQuery}`);
    const comments = Object.values(result);
    return comments;
}

export const createComment = async (postId, comment) => {
    const result = await request.post(baseUrl, { postId, comment });

    return result;
};







