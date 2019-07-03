import React, {Component} from "react";
import BookmarksForm from "./../forms/BookmarksForm";

class BookmarksPage extends Component {
    state = {
        bookmarks: []
    }

    onBookmakrFormSubmit= (bookmarks) => {
       this.setState({ bookmarks });
    }

    render() {
        return(
            <>
                <h2>Create New Bookmark</h2>
                <BookmarksForm onBookmarkFormSubmit={this.onBookmarkFormSubmit}/>
            </>
        );
    }
}

export default BookmarksPage;