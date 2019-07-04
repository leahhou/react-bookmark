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
import { connect } from "react-redux";

class App extends Component {

    render() {
        const { token } = this.props;

        return (
            <Router history={history}>
                <div>
                    { token && <h4>User Logged In!</h4>}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route 
                            exact 
                            path="/register" 
                            component={RegisterPage}
                        />
                        <PrivateRoute exact path="/bookmarks" component={BookmarksPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
}

export default connect(mapStateToProps)(App);
