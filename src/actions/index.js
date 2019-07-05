import { BOOKMARKS_LIST } from "./types";
import LocalAPI from "./../apis/local";

export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    return {
        type: "AUTH_TOKEN",
        payload: token
    }
}

export const fetchBookmarks = () => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.get("/bookmarks");

        dispatch({
            type: BOOKMARKS_LIST,
            payload: response.data
        });
    }
}