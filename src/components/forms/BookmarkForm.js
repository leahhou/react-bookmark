import React, {Component} from "react";
import { createBookmark } from "./../../actions";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

const state = {
    title: "",
    url: "",
    error: null,
    fetching: false
}

class BookmarkForm extends Component {
    state = {...state}

    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const { title, url } = this.state;
        
        try {
            // const response = await LocalAPI.post(`/bookmarks`, { title, url });
            this.props.createBookmark(title, url);
            
        } catch(error) {
           //this.setState({ error });
        }
    }

    render() {
        const { title, url, fetching } = this.state;

        return(
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={this.onInputChange} />
                </div>
                <div>
                    <label>Url</label>
                    <input type="text" name="url" value={url} onChange={this.onInputChange} />
                </div>
                {fetching ? <p>Creating...</p> : <input type="submit" value="Create" />}
            </form>
        );
    }
}

const WrappedBookmarkForm = reduxForm({
    form: "bookmark"
})(BookmarkForm);

export default connect(null, { createBookmark })(WrappedBookmarkForm);