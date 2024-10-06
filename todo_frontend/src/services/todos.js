import axios from 'axios';

const API_BASE_URL = "http://localhost:8000/api";

class TodoDataService {
    getAll(token) {
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        return axios.get(`${API_BASE_URL}/todoApp/`);
    }

    createTodo(data, token) {
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
        return axios.post(`${API_BASE_URL}/todoApp/`, data);
    }

    updateTodo(id, data, token) {
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
        return axios.put(`${API_BASE_URL}/todoApp/${id}`, data);
    }

    deleteTodo(id, token) {
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
        return axios.delete(`${API_BASE_URL}/todoApp/${id}/complete`);
    }

    completeTodo(id, token) {
        axios.defaults.headers.common["Authorization"] = `Token ${token}`;
        return axios.put(`${API_BASE_URL}/todoApp/${id}/complete`);
    }

    login(data) {
        return axios.post(`${API_BASE_URL}/login/`, data);
    }

    signup(data) {
        return axios.post(`${API_BASE_URL}/signup/`, data);
    }
}

export default new TodoDataService();