import React, { Component } from 'react';
import "../css/LoginPageCSS.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class LoginPage extends Component {

    constructor(){
        super();
        this.state = {
            email: "",
            phone: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container">
                <Card className="login-card">
                    <Form>
                        <Form.Label>Email Address: </Form.Label>
                        <br/>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email address"
                            className="login-form-input"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <Form.Label>Phone: </Form.Label>
                        <br/>
                        <Form.Control
                            type="number"
                            placeholder="Enter your contact number"
                            className="login-form-input"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                        <br/>
                        <Button
                            variant="primary"
                            type="submit"
                            className="login-form-submit"
                        >Submit </Button>
                    </Form>
                </Card>
            </div>
           
        );
    }
}

export default LoginPage;