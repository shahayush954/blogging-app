import React, { Component } from 'react';
import "../css/CommentsCSS.css";

class Comments extends Component {
    
    render() {
        return (
            <div className="comment-container">
                <span className="comment-email">{this.props.comment.email} says</span>
                <br />
                <hr className="comment-hr"/>
                <span className="comment-title">{this.props.comment.name}</span>
                <br />
                <div className="comment-body">{this.props.comment.body}</div>
                
            </div>
        );
    }
}

export default Comments;