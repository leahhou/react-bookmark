import axios from "axios";

const LocalAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

LocalAPI.setAuthHeader = function (token) {
    this.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

LocalAPI.interceptors.response.use(function (config) {
    console.log(config);
    
    if (config.status === 401) {
        sessionStorage.removeItem("token");
        LocalAPI.defaults.headers.common["Authorization"] = null;
        return Promise.reject("Invalid Token");
    }

    return config;
})

export default LocalAPI;