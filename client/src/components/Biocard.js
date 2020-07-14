import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
//import { response } from 'express';
//import user from '../../../routes/api/user';

class Biocard extends Component {
	state = {
		redirect: false,
		user: {},
	};

	componentDidMount() {
		const token = localStorage.getItem('trollo');

		if (token) {
			setAuthToken(token);
		}

		axios
			.get('/api/user')
			.then((res) => {
				this.setState({
					user: res.data,
				});
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
		const { redirect, user } = this.state;
		if (redirect) {
			return <Redirect to='/' />;
		}

		return (
			<div className='Biocard'>
				<div className='ui container'></div>
				<h1>Welcome,</h1>
				<p>{user.name}</p>
				<p>{user.email}</p>
				<div className='ui teal button' onClick={this.handleLogout}>
					Logout
				</div>
			</div>
		);
	}
}

export default Biocard;
