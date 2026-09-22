import api from './api';

const login = (email, password) => {
    return api.post('/auth/login', { email, password })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

const register = (data) => {
    return api.post('/auth/register', data);
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default { login, logout, register, getCurrentUser };
