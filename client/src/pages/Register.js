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
		const token = localStorage.getItem('trollo');

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
			<div>
				{/* <BackgroundImg className='background' /> */}
				{/* <Logo /> */}
				<div className='ui middle aligned center aligned grid'>
					<div className='column'>
						<h2 className='ui image header'>
							<div className='content'>Log-in to your account</div>
						</h2>
						<form className='ui large form' onSubmit={this.onSubmit}>
							<div className='ui stacked secondary  segment'>
								<div className='field'>
									<div className='ui left icon input'>
										<i className='user icon'></i>
										<input
											type='name'
											name='name'
											placeholder='Email address'
											value={this.state.name}
											onChange={this.onChange}
										/>
									</div>
								</div>
								<div className='field'>
									<div className='ui left icon input'>
										<i className='user icon'></i>
										<input
											type='email'
											name='email'
											placeholder='Email address'
											value={this.state.email}
											onChange={this.onChange}
										/>
									</div>
								</div>
								<div className='field'>
									<div className='ui left icon input'>
										<i className='lock icon'></i>
										<input
											type='password'
											name='password'
											placeholder='Enter Password'
											value={this.state.password}
											onChange={this.onChange}
										/>
									</div>
								</div>
								<input type='submit' className='ui fluid large olive button' />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
