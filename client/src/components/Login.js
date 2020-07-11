import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false,
			email: '',
			password: '',
			errors: {},
		};
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
		};
		console.log(newUser);
		axios
			.post('/api/user/login', newUser)
			.then((res) => {
				this.setState({
					redirect: true,
					errors: {},
				});
				console.log(res.data);
			})
			.catch((err) => console.log(err.response.data));
		//this.state({
		//errors: err.response.data
		//});
	};

	render() {
		const { errors, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/dashboard' />;
		}
		return (
			<div className='Login'>
				<div className='ui container'>
					<h3>Login Page </h3>
					<form onSubmit={this.onSubmit}>
						<div className='ui form'>
							<input
								type='email'
								name='email'
								placeholder='Email address'
								value={this.state.email}
								onChange={this.onChange}
							/>
							<input
								type='password'
								name='pasword'
								placeholder='Enter Password'
								value={this.state.password}
								onChange={this.onChange}
							/>
							<div className='ui teal button'>Submit</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
