import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import "../css/LoginPageCSS.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import  Toast  from 'react-bootstrap/Toast';
import { MdError } from 'react-icons/md'
import {AiFillCloseCircle } from 'react-icons/ai';


// Shanna@melissa.tv
// 010-692-6593 x09125


class LoginPage extends Component {

    constructor(){
        super();
        this.state = {
            email: "",
            phone: "",
            errors: "",
            showErrorToast: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.errors.length !== 0){
            this.setState({
                errors: nextProps.user.errors,
                showErrorToast: true
            });
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     if(nextProps.user.errors !== prevState.user.errors){
    //         return {
    //             ...prevState,
    //             errors: nextProps.user.errors
    //         }
    //     }
    //     else{
    //         return {
    //             ...prevState
    //         }
    //     }
    // }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let userData = {
            email: this.state.email,
            phone: this.state.phone
        }

        this.props.loginUser(userData,this.props.history);

    }

    toggleErrorToast = () => {
        this.setState({
            showErrorToast: false
        });
    }

    render() {
        return (
            <div className="container">
                <Toast 
                    show={this.state.showErrorToast} 
                    animation={true}
                    className="login-error-toast"
                >
                    <Toast.Header
                        className="login-error-toast-header"
                        closeButton={false}
                    >
                        <MdError 
                            className="login-error-toast-icon"
                            size="3rem"
                        />

                        <strong>Login Failed</strong>

                        <AiFillCloseCircle 
                            className="login-error-toast-close-icon"
                            size="3rem"
                            onClick={this.toggleErrorToast}
                        />
                    </Toast.Header>
                    <hr className="login-error-toast-hr" />
                    <Toast.Body className="login-error-toast-body">
                        {this.state.errors}
                    </Toast.Body>
                </Toast>


                <Card className="login-card">
                    <Form onSubmit={this.handleSubmit}>
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
                            type="text"
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

const mapStateToProps = (state) =>({
    user: state.user
});

const mapActionsToProps = {
    loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);