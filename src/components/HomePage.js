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
        this.getPageNumberList = this.getPageNumberList.bind(this);
        this.buildPostMarkUp = this.buildPostMarkUp.bind(this);
        this.buildPagesMarkUp = this.buildPagesMarkUp.bind(this);
    }

    //change the posts based on the number selected that are displayed at the bottom.
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

    //Returns the list of numbers that will needed based on the number of posts given that we are
    //displaying 10 posts per page.
    getPageNumberList = () => {
        let pageNumbers = [];
        for(let i=1; i<=Math.ceil(this.props.posts.length / this.state.postsPerPage ); i++){
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    //Builds the post mark up from the posts array based on the page selected.
    buildPostMarkUp = () => {
        let startIndex = (this.state.currentPage-1) * this.state.postsPerPage;
        let endIndex = (this.state.currentPage * this.state.postsPerPage);

        let currentPagePosts = this.props.posts.slice(startIndex, endIndex);

        let postMarkUp = currentPagePosts.map((onePost,index) => 
            <IndividualPosts 
                key={index}
                post={onePost}
            />
        );

        return postMarkUp;
    }

    //Builds the mark up for the page numbers that are displayed at the bottom.
    buildPagesMarkUp = () => {
        let pageNumbers = this.getPageNumberList();
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

        return pagesMarkUp;
    }

    render() {

        
        let postMarkUp = this.buildPostMarkUp();
        let pagesMarkUp = this.buildPagesMarkUp();

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