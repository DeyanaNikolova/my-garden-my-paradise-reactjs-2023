import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/posts';


export const postServiceFactory = (token) => {
    const request = requestFactory(token);
   

    const getAllPost = async () => {
        const result = await request.get(baseUrl);
        const posts = Object.values(result);
        return posts;
    };

    const getPostById = async (postId) => {
        const post = await request.get(`${baseUrl}/${postId}`);
        return post;
    };

    const addPost = async (postData) => {
        const result = await request.post(baseUrl, postData);
        
        console.log(result);
        return result;
    };

    const updatePost = async (postId, postData) => {
        const updatedPost = await request.put(`${baseUrl}/${postId}`, postData);
        return updatedPost;
    };

    const deletePost = async (postId) => {
        await request.del(`${baseUrl}/${postId}`);
    };

    return {
        getAllPost,
        getPostById,
        addPost,
        updatePost,
        deletePost,
    };
};