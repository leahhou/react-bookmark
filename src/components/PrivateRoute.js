import React from "react";
import { Route, Redirect } from "react-router-dom";
<<<<<<< HEAD
import { connect }from "react-redux";
=======
import { connect } from "react-redux";
>>>>>>> upstream/master

const PrivateRoute = (props) => {
    const { component: Component, token, ...rest } = props;

    return (
        <Route {...rest} render={(props) => {
            if (token) {
                return <Component {...props} />
            }

            return <Redirect to="/" />;
        }} />
    )
}
const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    };
}

<<<<<<< HEAD
=======
const mapStateToProps = (state) => {
   return {
       token: state.auth.token
   } 
};

>>>>>>> upstream/master
export default connect(mapStateToProps)(PrivateRoute);