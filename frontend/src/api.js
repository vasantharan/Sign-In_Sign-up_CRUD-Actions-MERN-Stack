import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

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
        console.log('api called')
        console.log(data)
        const response = await axios.post(`${API_URL}/sign_in`, data);
        console.log('returned')
        console.log(response.data.message)  
        console.log(response.data.token)
        return response;
    } catch (error) {
        throw error;
    }
};

export const getUserData = async () => {
    try {
        console.log('api called for user data')
        console.log(localStorage.getItem('token'))
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
