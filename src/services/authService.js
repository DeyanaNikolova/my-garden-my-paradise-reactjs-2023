import { requestFactory } from "./requester";


const baseUrl = 'http://localhost:3030/users';

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    const login = (data) => request.post(`${baseUrl}/login`, data);
    
    const register = (data) => request.post(`${baseUrl}/register`, data);

    const logout = () => request.get(`${baseUrl}/logout`);

    return {
        login,
        register,
        logout
    };
};