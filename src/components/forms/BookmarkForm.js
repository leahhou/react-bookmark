import React, {Component} from "react";
import LocalAPI from "./../../apis/local";

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
            this.setState({ fetching : true });
            const response = await LocalAPI.post(`/bookmarks`, { title, url });
            this.props.onBookmarkFormSubmit(response.data);
            this.setState(state);
            
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

export default BookmarkForm