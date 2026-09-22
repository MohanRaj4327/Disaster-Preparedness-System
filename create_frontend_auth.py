import os

base_dir = r"frontend\src\services"

files = {
    f"{base_dir}\\api.js": """import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
""",
    f"{base_dir}\\auth.service.js": """import api from './api';

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
"""
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

print("Frontend auth services created.")
