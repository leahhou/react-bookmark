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
        const { bookmarks } = this.props;
        
        return (
            <>
                <h2>Create New Bookmark</h2>
                <BookmarkForm onBookmarkFormSubmit={this.onBookmarkFormSubmit} />
                <h2>My Bookmarks</h2>
                <ul>
                    {bookmarks.map((item, index) => {
                        return (
                            <li key={item._id}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
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