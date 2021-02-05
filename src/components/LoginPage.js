import React, { Component } from 'react';
import "../css/LoginPageCSS.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class LoginPage extends Component {
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
                        />
                        <br/>
                        <Form.Label>Phone: </Form.Label>
                        <br/>
                        <Form.Control
                            type="number"
                            placeholder="Enter your contact number"
                            className="login-form-input"
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