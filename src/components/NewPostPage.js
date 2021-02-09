import React, { Component } from 'react';
import { connect } from "react-redux";
import "../css/NewPostPageCSS.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



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

    componentDidMount(){
        this.setState({
            userId: this.props.user.userDetails.id
        });
    }

    handleSubmit = () => {

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

export default connect(mapStateToProps, {})(NewPostPage);