
import React, { Component } from "react";
import BookmarkForm from "./../forms/BookmarkForm";


class BookmarksPage extends Component {
    state = {
        bookmarks: []
    }


    onBookmarkFormSubmit = (bookmarks) => {
        this.setState({ bookmarks });
    }

    render() {
        return (
            <>
                <h2>Create New Bookmark</h2>
                <BookmarkForm onBookmarkFormSubmit={this.onBookmarkFormSubmit} />

            </>
        );
    }
}

export default BookmarksPage;