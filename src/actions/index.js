import { BOOKMARKS_LIST } from "./types";

export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    return {
        type: "AUTH_TOKEN",
        payload: token
    }
}

export const fetchBookmarks = () => {

    return {
        type: BOOKMARKS_LIST,
        payload: [{ _id: "1234", title: "test", url: "http://google.com"}]
    }
}