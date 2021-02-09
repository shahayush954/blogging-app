import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllPosts } from "../redux/actions/dataActions";
import PersonalHeader from "./PersonalHeader";
import IndividualPosts from "./IndividualPosts";



class HomePage extends Component {

    componentDidMount(){
        this.props.getAllPosts();
    }

    render() {

        let postMarkUp = this.props.posts.map((onePost,index) => 
            <IndividualPosts 
                key={index}
                post={onePost}
            />
        );

        return (
            <div className="home-container">
                <PersonalHeader />
                {postMarkUp}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.data.posts
});

const mapActionsToProps = {
    getAllPosts
}

export default connect(mapStateToProps, mapActionsToProps)(HomePage);