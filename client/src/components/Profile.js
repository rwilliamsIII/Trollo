import React, { Component } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
import authenticate from '../utils/Authenticate';

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false,
			user: {},
		};
	}

	componentDidMount() {
		// const token = localStorage.getItem('trollo');

		// if (token) {
		// 	setAuthToken(token);
		// }

		axios
			.get('/api/user')
			.then((res) =>
				this.setState({
					user: res.data,
				})
			)
			.catch((err) => console.log(err));
	}
	render() {
		const { user } = this.state;
		return (
			<div className='Biocard'>
				<div className='ui container'></div>
				<h1>Welcome</h1>
				<p>{user.name}</p>
				<p>{user.email}</p>
			</div>
		);
	}
}

export default Profile;
