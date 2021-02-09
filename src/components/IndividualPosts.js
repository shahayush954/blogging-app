import React, { Component } from 'react';
import "../css/IndividualPostCSS.css";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const trimLength = 61;

class IndividualPosts extends Component {

    //getTrimedText function gives back the trimed body as per the length defined in the above constant trimLength
    getTrimedText = () => {
        let displayString = "";
        let body = this.props.post.body;
        displayString = body.substring(0,trimLength);
        if(this.compareDisplayLength(displayString.length, body.length)){
            displayString += `...`;
        }
        return displayString;
    }

    //compareDisplayLength is an utility function that is used to check if the trimed body length is equal
    //to the actual body length or not
    //returns true if both lengths are not equal
    //returns false otherwise
    compareDisplayLength(displayLength, bodyLength){
        if(displayLength !== bodyLength){
            return true;
        }
        else{
            return false;
        }
    }

    render() {
        let displayString = this.getTrimedText();
        let body = this.props.post.body;
        let url = `/${this.props.post.id}`;
        return (    
            <div className="individual-post-container">
                <Card className="individual-post-card">
                    <Card.Title
                        className="individual-post-title"
                    >{this.props.post.title}</Card.Title>
                    <Card.Body
                        className="individual-post-body"
                    >{displayString}{
                        this.compareDisplayLength(displayString.length,body.length) ? (
                        <Link
                            to={url}
                            className="read-more"
                        >Read More</Link>
                        ) : null
                    }</Card.Body>
                </Card>
                
            </div>
        );
    }
}

export default IndividualPosts;