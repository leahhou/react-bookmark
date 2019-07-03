import React, {Component} from "react";
import axios from "axios";

class BookmarkForm extends Component {
    state = {
        title: "",
        url: "",
        error: null
    }


    render() {

        return(
            <form>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" />
                </div>
                <div>
                    <label>Url</label>
                    <input type="text" name="url" />
                </div>
                <input type="submit" value="Create" />
            </form>
        );
    }
}

export default BookmarkForm