import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import "../css/LoginPageCSS.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class LoginPage extends Component {

    constructor(){
        super();
        this.state = {
            email: "",
            phone: "",
            errors: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.user.erros !== ""){
            this.setState({
                errors: nextProps.user.errors
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
        console.log("inside handle submit");
        let userData = {
            email: this.state.email,
            phone: this.state.phone
        }

        this.props.loginUser(userData,this.props.history);

    }

    render() {
        return (
            <div className="container">
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