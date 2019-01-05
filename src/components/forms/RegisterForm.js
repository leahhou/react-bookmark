import React, {Component} from "react";

class RegisterForm extends Component {
    state = { 
        email: "", 
        password: "" 
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
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

export default RegisterForm;