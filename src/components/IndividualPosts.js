import React, { Component } from 'react';
import "../css/IndividualPostCSS.css";
import Card from "react-bootstrap/Card";

class IndividualPosts extends Component {

    

    render() {
    
        return (    
            <div className="individual-post-container">
                <Card className="individual-post-card">
                    <Card.Title
                        className="individual-post-title"
                    >{this.props.post.title}</Card.Title>
                    <Card.Body
                        className="individual-post-body"
                    >{this.props.post.body}</Card.Body>
                </Card>
                
            </div>
        );
    }
}

export default IndividualPosts;