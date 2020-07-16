import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import authenticate from '../utils/Authenticate';
import setAuthToken from '../utils/setAuthToken';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false,
			email: '',
			password: '',
			name: '',
			errors: {},
		};
	}

	componentDidMount() {
		const token = localStorage.getItem('tollo');

		if (authenticate(token)) {
			this.setState({
				redirect: true,
			});
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			email: this.state.email,
			password: this.state.password,
			name: this.state.name,
		};

		axios
			.post('/api/user/register', newUser)
			.then((res) => {
				console.log(newUser);
				this.setState({
					redirect: true,
					// 	errors: {},
				});

				// if (res.data.token) {
				// 	const { token } = res.data;
				// 	// save token to local storage
				// 	localStorage.setItem('trollo', token);
				// 	setAuthToken(token);

				// }
				console.log(res.data);
			})
			.catch((err) => console.log(err.response.data));
		// this.state({
		// errors: err.response.data;
	};

	render() {
		const { errors, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/' />;
		}
		return (
			<div className='Sign Up'>
				<div className='ui container'>
					<h3>Sign Up</h3>
					<form onSubmit={this.onSubmit}>
						<div className='ui form'>
							<input
								type='name'
								name='name'
								placeholder='Enter Name'
								value={this.state.name}
								onChange={this.onChange}
							/>
							<input
								type='email'
								name='email'
								placeholder='Email address'
								value={this.state.email}
								onChange={this.onChange}
							/>
							<input
								type='password'
								name='password'
								placeholder='Enter Password'
								value={this.state.password}
								onChange={this.onChange}
							/>
							<input type='submit' className='ui teal button' />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
