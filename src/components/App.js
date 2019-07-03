import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BookmarksPage from "./pages/BookmarksPage";

class App extends Component {
    state = {
        token: sessionStorage.getItem("token") || null
    }

    onRegisterFormSubmit = (token, callback) => {
        sessionStorage.setItem("token", token);
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
                        <Route exact path="/bookmarks" component={BookmarksPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
