import React, { Component } from 'react';
import { connect } from "react-redux";
import "../css/NewPostPageCSS.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createPost } from "../redux/actions/dataActions";



class NewPostPage extends Component {

    constructor(){
        super();
        this.state = {
            title: "",
            body: "",
            userId: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    // We use componentDidMount to get the userId from the store after the component has been mounted
    // so that it can be directly used in the non-editable userId field. 
    componentDidMount(){
        this.setState({
            userId: this.props.user.userDetails.id
        });
    }

    // handleSubmit function -> handles the clicking of the create new post Button
    // In this we create a post object and then pass it on to createPost action along 
    // with a history object for redirection.
    handleSubmit = (event) => {
        event.preventDefault();
        let postData = {
            title: this.state.title,
            body: this.state.body,
            userId: this.state.userId
        };

        this.props.createPost(postData,this.props.history);
    }


    // handleChange function -> function for handling the controlled form feature of React
    // Whenever any of the field values are changed this function is called to bind it to the respective
    // field values in the state
    // This ensures that the state has the most recent values at any given time.
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="new-post-container">
                <Card className="new-post-card">
                    <h3>What's on your Mind?</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label>Title: </Form.Label>
                        <br />
                        <Form.Control
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="new-post-input"
                            placeholder="Title of you Post"
                        />
                        <br />
                        <Form.Label>Body: </Form.Label>
                        <br />
                        <Form.Control 
                            name="body"
                            value={this.state.body}
                            onChange={this.handleChange}
                            className="new-post-input new-post-input-body"
                            as="textarea"
                            placeholder="Your post content"
                        />
                        <br />
                        <Form.Label>User Id: </Form.Label>
                        <br />
                        <Form.Control 
                            type="number"
                            readOnly
                            className="new-post-input-readonly"
                            value={this.state.userId}
                        />
                        <br />
                        <Button
                            className="new-post-submit"
                            onClick={this.handleSubmit}
                        >Create</Button>
                    </Form>

                </Card>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapActionsToProps = {
    createPost
};

export default connect(mapStateToProps, mapActionsToProps)(NewPostPage);