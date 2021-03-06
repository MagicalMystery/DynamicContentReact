import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css"


export class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {

        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    handleSubmit = async event => {
        event.preventDefault();

        try {

            this.props.history.push({
                pathname: '/products',
                state: { email: this.state.email,
                    password: this.state.password }
            })

            // this.props.history.push("/products",state: { email: this.state.email,
            //     password: this.state.password });

        } catch (e) {
            alert(e.message);
        }
    }
render() {
    return (
        <div className="formIndent">
            <h2><center>Login Page</center></h2>
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <Button
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
    );
}
}