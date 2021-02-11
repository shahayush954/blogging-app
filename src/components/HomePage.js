import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllPosts } from "../redux/actions/dataActions";
import { getAllUsers } from "../redux/actions/userActions";
import PersonalHeader from "./PersonalHeader";
import IndividualPosts from "./IndividualPosts";
import "../css/HomePageCSS.css";



class HomePage extends Component {

    constructor(){
        super();
        this.state = {
            currentPage: 1,
            postsPerPage: 10,
        }

        this.changePostsPerPage = this.changePostsPerPage.bind(this);
    }

    changePostsPerPage = (event) => {
        let page = Number(event.target.id);

        this.setState({
            currentPage: page
        });
    }

    componentDidMount(){
        this.props.getAllPosts();
        this.props.getAllUsers();
    }

    render() {

        let pageNumbers = [];
        for(let i=1; i<=Math.ceil(this.props.posts.length / this.state.postsPerPage ); i++){
            pageNumbers.push(i);
        }

        let startIndex = (this.state.currentPage-1) * this.state.postsPerPage;
        let endIndex = (this.state.currentPage * this.state.postsPerPage);

        console.log("Start:" + startIndex + "End:" + endIndex);

        let currentPagePosts = this.props.posts.slice(startIndex, endIndex);

        let postMarkUp = currentPagePosts.map((onePost,index) => 
            <IndividualPosts 
                key={index}
                post={onePost}
            />
        );

        let pagesMarkUp = pageNumbers.map(number =>  
            <li
                key={number}
                id={number}
                onClick={this.changePostsPerPage}
                className="page-list-elements"
            >
                {number}
            </li>
        );
        return (
            <div className="home-container">
                <PersonalHeader />
                {postMarkUp}
                <ul className="page-list">
                    {pagesMarkUp}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    posts: state.data.posts
});

const mapActionsToProps = {
    getAllPosts,
    getAllUsers
}

export default connect(mapStateToProps, mapActionsToProps)(HomePage);