import React, {Component} from "react";
import LocalAPI from "./../../apis/local";
import { setAuthToken } from "./../../actions";
import { connect } from "react-redux";

class RegisterForm extends Component {
    state = { 
        email: "", 
        password: "" 
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        const { email, password } = this.state;

        LocalAPI.post(`/auth/register`, { email, password})
            .then(response => {
                this.props.setAuthToken(response.data.token);
                this.props.history.push("/");

                // this.props.onRegisterFormSubmit(response.data.token, () => {
                //     this.props.history.push("/");
                // })
            })
            .catch(error => console.log(error));
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    }

    render() {
        const { email, password } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(event) => this.onInputChange("email", event)} />
                </p>
                <p>
                    <label htmlFor="email">Password</label>
                    <input type="password" value={password} onChange={(event) => this.onInputChange("password", event)} />
                </p>
                <p>
                    <input type="submit" value="Register New User" />
                </p>
            </form>
        );
    }
}

export default connect(null, { setAuthToken })(RegisterForm);