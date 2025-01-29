import axios from 'axios';
import history from "./history.js";

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            localStorage.removeItem("token");
            history.push("/login");
        }
        return Promise.reject(error);
    }
);



export default apiClient;
