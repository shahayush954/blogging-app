import React, { Component } from 'react';
import { connect } from "react-redux";
import "../scss/PersonalHeader.scss"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class PersonalHeader extends Component {

    render() {
        const title = `${this.props.user.userDetails.name}'s Blog`;
        const email = this.props.user.userDetails.email;
        const phone = this.props.user.userDetails.phone;
        const address = `${this.props.user.userDetails.address.street}, ${this.props.user.userDetails.address.city}`;

        return (
            <div className="personal-header-container">
                <h1 className="personal-header-title">{title}</h1>
                <p className="personal-header-user-details">{email}</p>
                <p className="personal-header-user-details">{phone}</p>
                <p className="personal-header-user-details">{address}</p>
                <hr className="personal-header-hr" />
                <p className="personal-header-user-details">
                    <Link to="/add-new-post">
                    <   Button 
                            className="personal-header-button"
                        >Add a New Post</Button>
                    </Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, {})(PersonalHeader);