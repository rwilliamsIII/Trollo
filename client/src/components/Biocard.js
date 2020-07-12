import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Biocard extends Component {
	state = {
		redirect: false,
	};

	componentDidMount() {
		const token = localStorage.getItem('trollo');

		if (token) {
			setAuthToken(token);
		}

		axios
			.get('/api/user')
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}

	handleLogout = () => {
		localStorage.removeItem('trollo');
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
			<div className='Biocard'>
				<div className='ui container'></div>
				<h1>Dashboard</h1>
				<p>Welcome, name</p>
				<p>Email Address:</p>
				<div className='ui teal button' onClick={this.handleLogout}>
					Logout
				</div>
			</div>
		);
	}
}

export default Biocard;
