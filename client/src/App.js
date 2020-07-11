import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NoMatch from './components/NoMatch';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route exact path='/Dashboard' component={Dashboard} />
					<Route component={NoMatch} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
