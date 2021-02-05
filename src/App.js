import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage"; 
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
	<Provider store = {store}>
    	<div className="App">
			<BrowserRouter>
				<Switch>
					<Route 
						exact
						path="/"
						component={HomePage}
					/>
					<Route
						exact
						path="/login"
						component={LoginPage}
					/>
				</Switch>
        	</BrowserRouter>
      	</div>
    </Provider>
  );
}

export default App;
