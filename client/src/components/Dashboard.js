import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ThingsToDo from './ThingsToDo';



class Dashboard extends Component {
	state = {
		redirect: false,
	};

	// componentDidMount() {
	// 	axios.get('/api/user')
	// 	.then(response => {
	// 		 console.log(response);
	// 	})
	// 	.catch(err => console.log(err.response));
	// 	}
	// }

	handleLogout = () => {
		localStorage.removeItem('example-app');
		this.setState({
			redirect: true,
		});
	};

	render() {
		const { redirect } = this.state;
		if (redirect) {
			return <Redirect to='/' />;
		}
		return (
			<div className='Dashboard'>
				<div className='ui container'></div>
				<h1>Dashboard</h1>
				<p>Welcome, name</p>
				<p>Email Address:</p>
				<div className='ui teal button'>Logout</div>
				<ThingsToDo />
			</div>
		);
	}
}

export default Dashboard;
