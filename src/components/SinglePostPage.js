import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import "../css/SinglePostPageCSS.css";
import {IoMdArrowRoundBack} from "react-icons/io"


class SinglePostPage extends Component {

    constructor(){
        super();
        this.state = {
            post: {},
            author: {},
        }

        this.getAuthorDetails = this.getAuthorDetails.bind(this);
    }

    //getAuthorDetails is an utitlity function that sets the current author to state who has written this 
    //blog
    getAuthorDetails = (authorId) => {
        let currentAuthor = this.props.allUsers.find((eachAuthor) => eachAuthor.id === authorId )
        this.setState({
            author: currentAuthor
        });
    }

    //we use componentDidMount to fetch for which post or blog we are viewing this page for.
    componentDidMount(){
        let postId = Number(this.props.match.params.postId);
        let currentPagePost = this.props.posts.find((onePost) => onePost.id === postId);
        this.setState({
            post: currentPagePost
        });
        this.getAuthorDetails(currentPagePost.userId);
    }

    goBack = () => {
        window.history.back();
    }


    render() {
        return (
            <div className="container">
                <Card className="single-page-card">
                    <IoMdArrowRoundBack 
                        className="single-page-back-button"
                        onClick={this.goBack}
                    />
                    <Card.Title className="single-page-title">
                        {this.state.post.title}
                    </Card.Title>
                    <Card.Subtitle className="single-page-subtitle">
                        Author: {this.state.author.name}
                    </Card.Subtitle>
                    <Card.Body className="single-page-body">
                        {this.state.post.body}
                    </Card.Body>
                    <hr className="single-page-hr"/>

                </Card>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.data.posts,
    user: state.user.userDetails,
    allUsers: state.user.allUsers
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(SinglePostPage);