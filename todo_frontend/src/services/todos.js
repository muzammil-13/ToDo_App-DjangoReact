import axios from 'axios';
// We use a library called axios for sending get, post, put and delete requests.

class TodoDataService{

    getAll(token){
        axios.defaults.headers.common['Authorization']="Token"+token;
        return axios.get("http://localhost:8000/api/todoApp/");
    }

    createTodo(data,token){
        axios.defaults.headers.common["Authorization"]="Token"+token;
        return axios.post("http://127.0.0.1:8000/api/todoApp/",data);
    }

    updateTodo(id,data,token){
        axios.defaults.headers.common["Authorization"]="Token"+token;
        return axios.put("http://127.0.0.1:8000/api/todoApp/${id}",data);
    }

    deleteTodo(id,token){
        axios.defaults.headers.common["Authorization"]="Token"+token;
        return axios.delete("http://127.0.0.1:8000/api/todoApp/${id}/complete");
    }

    completeTodo(id,token){
        axios.defaults.headers.common["Authorization"]="Token"+token;
        return axios.put("http://127.0.0.1:8000/api/todoApp/${id}/complete");
    }

    login(data){
        return axios.post("http://127.0.0.1:8000/api/login/",data);
    }

    signup(data){
        return axios.post("http://127.0.0.1:8000/api/signup/",data);
    }
}

export default new TodoDataService();