import api from './api';

export const registerUser = async (user) => {
    try {
        const response = await api.post('/usuarios/register', user);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addDiaryEntry = async (entry) => {
    try {
        const response = await api.post('/diarios', entry);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addScannerResult = async (result) => {
    try {
        const response = await api.post('/escanerFacial', result);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createPost = async (post) => {
    try {
        const response = await api.post('/publicaciones', post);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPosts = async () => {
    try {
        const response = await api.get('/publicaciones');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserPosts = async (userId) => {
    try {
        const response = await api.get(`/publicaciones/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};