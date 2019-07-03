import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BookmarksPage from "./pages/BookmarksPage";
import LocalAPI from "./../apis/local";

class App extends Component {
    constructor(props) {
       super(props);
       const token=sessionStorage.getItem("token") || null
       this.state= { token};

       if (token) {
           LocalAPI.setAuthHeader(token);
       }
    }
    

    onRegisterFormSubmit = (token, callback) => {
        sessionStorage.setItem("token", token);
        LocalAPI.setAuthHeader(token);
        this.setState({ token }, callback);
    }

    render() {
        const { token } = this.state;

        return (
            <BrowserRouter>
                <div>
                    { token && <h4>User Logged In!</h4>}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/bookmarks" component={BookmarksPage} />
                        <Route 
                            exact 
                            path="/register" 
                            render={(props) => <RegisterPage {...props} onRegisterFormSubmit={this.onRegisterFormSubmit} />} 
                        />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
