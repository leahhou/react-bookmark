import React, { Component } from "react";
import BookmarkForm from "./../forms/BookmarkForm";
import { connect } from "react-redux";
import { fetchBookmarks } from "./../../actions";

class BookmarksPage extends Component {
    onBookmarkFormSubmit = (bookmarks) => {
        this.setState({ bookmarks });
    }

    componentDidMount() {
        this.props.fetchBookmarks();
    }

    render() {
        console.log(this.props.bookmarks);
        return (
            <>
                <h2>Create New Bookmark</h2>
                <BookmarkForm onBookmarkFormSubmit={this.onBookmarkFormSubmit} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookmarks: state.bookmarks
    }
}

export default connect(mapStateToProps, { fetchBookmarks })(BookmarksPage);