import React, { Component } from 'react';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class LogoutBtn extends Component {
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
		const { redirect } = this.state;
		if (redirect) {
			return <Redirect to='/' />;
		}
		return (
			<div>
				<div
					style={{ display: 'flex' }}
					className='fluid ui olive button'
					onClick={this.handleLogout}
				>
					Logout!
				</div>
			</div>
		);
	}
}

export default LogoutBtn;
