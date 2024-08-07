import axios from 'axios';

const API_URL = 'https://sign-in-sign-up-crud-actions-mern-stack.onrender.com'; 

export const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/sign_up`, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const signIn = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/sign_in`, data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const getUserData = async () => {
    try {
        const response = await axios.get(`${API_URL}/user/data`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) { 
        throw error;
    }
};

export const signOut = async () => {
    try {
        await axios.post(`${API_URL}/signout`, null, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        localStorage.removeItem('token');
    } catch (error) {
        throw error;
    }
};
