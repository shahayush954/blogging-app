import './App.css';
import React, { Component } from 'react';
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage"; 
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { getCookies } from "./redux/actions/userActions";
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
		console.log("Inside LoginPage");
		window.history.pushState(null,null,"/login");
		return LoginPage;
	}

	callHomePage = () => {
		console.log("Inside HomePage");
		window.history.pushState(null,null,"/");
		return HomePage;
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
