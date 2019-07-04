export const setAuthToken = (token) => {
<<<<<<< HEAD
=======
    sessionStorage.setItem("token", token);
    
>>>>>>> upstream/master
    return {
        type: "AUTH_TOKEN",
        payload: token
    }
}