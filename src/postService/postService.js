import * as request from './requester';

const baseUrl = 'http://loclhost:3030/data/posts';

export const getAllPost = async () => {
    const result = await request.get(baseUrl);
    const posts = Object.values(result);
    return posts;
};

export const addPost = async (postData) => {
    const result = await request.post(baseUrl, postData);
    return result;
};