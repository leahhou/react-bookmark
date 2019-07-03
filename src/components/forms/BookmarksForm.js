import React, {Component} from "react";
import axios from "axios";


class BookmarksForm extends Component {
    state = {
        title: "",
        url: "",
        error: null
    }

    onInputChange = (event) => {
        const updateState = [];
        updateState[event.target.name] = event.target.value;
        this.setState({[event.target.name]:event.target.value })
    }

    onFormSubmit = async (event) => {
       event.preventDefault();
       const { title, url } = this.state;
       try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/bookmarks`, {title, url});
        this.props.onBookmarkFormSubmit(response.data);
       } catch(error) {
        this.setState( { error });
       }

    }

    render() {
       const { title, url } = this.state;

        return (
            <>
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChnage={this.onInputChange}></input>
                </div>
                <div>
                    <label>URL</label>
                    <input type="text" name="url" value= {url} onChnage={this.onInputChange}></input>
                </div>
                <input type="submit" value="Create Bookmark"></input>
            </form>
            </>
        )
      }
}

export default BookmarksForm;