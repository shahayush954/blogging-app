import './App.css';
import React, { Component } from 'react';
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage"; 
import NewPostPage from "./components/NewPostPage";
import SinglePostPage from "./components/SinglePostPage";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";
class App extends Component{

	constructor(){
		super();
		this.checkUserAlreadyLoggedIn = this.checkUserAlreadyLoggedIn.bind(this);
	}

	checkUserAlreadyLoggedIn = () => {
		if(this.props.user.userCookie === ""){
			return false;
		}
		else{
			return true;
		}
	}

	callLoginPage = () => {
		window.history.pushState(null,null,"/login");
		return LoginPage;
	}

	callHomePage = () => {
		window.history.pushState(null,null,"/");
		return HomePage;
	}

	callAddNewPostPage = () => {
		window.history.pushState(null, null, "/add-new-post")
		return NewPostPage;
	}
	render(){
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route 
							exact
							path="/"
							component={
								this.checkUserAlreadyLoggedIn() ? 
									this.callHomePage() : 
									this.callLoginPage()
							}
						/>
						<Route
							exact
							path="/login"
							component={
								this.checkUserAlreadyLoggedIn() ? 
									this.callHomePage() : 
									this.callLoginPage()
							}
						/>

						<Route
							exact
							path="/add-new-post"
							component={
								this.checkUserAlreadyLoggedIn() ? 
									this.callAddNewPostPage() :
									this.callLoginPage()
							}
						/>

						<Route 
							exact
							path="/:postId"
							component={SinglePostPage}
						/>
					</Switch>
				</BrowserRouter>
			  </div>
	  );
	}

}

const mapStateToProps = (state) => ({
	user: state.user
});


export default connect(mapStateToProps,{})(App);
