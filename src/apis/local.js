import axios from "axios";
import history from "./../history";

const LocalAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

LocalAPI.setAuthHeader = function (token) {
    this.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

LocalAPI.interceptors.response.use(response => response, (error) => {
    if (error.response.status === 401) {
        sessionStorage.removeItem("token");
        LocalAPI.defaults.headers.common["Authorization"] = null;
        history.push("/");
        return Promise.reject("Invalid Token");
    }
});

export default LocalAPI;