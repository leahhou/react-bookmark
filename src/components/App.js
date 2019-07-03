import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BookmarksPage from "./pages/BookmarksPage";
import LocalAPI from "./../apis/local";
import PrivateRoute from "./PrivateRoute";
import history from "./../history";

class App extends Component {
    constructor(props) {
        super(props);
        const token = sessionStorage.getItem("token") || null;
        this.state = { token };
    
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
            <Router history={history}>
                <div>
                    { token && <h4>User Logged In!</h4>}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route 
                            exact 
                            path="/register" 
                            render={(props) => <RegisterPage {...props} onRegisterFormSubmit={this.onRegisterFormSubmit} />} 
                        />
                        <PrivateRoute exact path="/bookmarks" component={BookmarksPage} token={token} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
