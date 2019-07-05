import { BOOKMARKS_LIST } from "./types";
import LocalAPI from "./../apis/local";

export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    return {
        type: "AUTH_TOKEN",
        payload: token
    }
}

export const setBookmarks = (bookmarks) => {
    return {
        type: BOOKMARKS_LIST,
        payload: bookmarks
    };
} 

export const fetchBookmarks = () => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.get("/bookmarks");
        dispatch(setBookmarks(response.data));
    }
}

export const createBookmark = (title, url) => {
    return async (dispatch, getState) => {
        const response = await LocalAPI.post(`/bookmarks`, { title, url });
        dispatch(setBookmarks(response.data));
    } 
}