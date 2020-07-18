import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import authenticate from '../utils/Authenticate';
import setAuthToken from '../utils/setAuthToken';
import { ReactComponent as BackgroundImg } from '../img/floating-cogs-2.svg';
import { ReactComponent as Logo } from '../img/trollo-logo-01.svg';

class Login extends Component {
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
		};

		axios.post('/api/user/login', newUser).then((res) => {
			console.log(newUser);

			if (res.data.token) {
				const { token } = res.data;
				// save token to local storage
				localStorage.setItem('trollo', token);
				setAuthToken(token);

				this.setState({
					redirect: true,
					// 	errors: {},
				});
			}
			//console.log(res.data);
		});
		// .catch((err) => console.log(err.response.data));
		// this.state({
		// errors: err.response.data;
	};

	render() {
		const { errors, redirect } = this.state;

		if (redirect) {
			return <Redirect to='/dashboard' />;
		}
		return (
			<div>

				{/* Gears Background Image */}
				{/* <div>
					<BackgroundImg className='loginImage' />
				</div> */}

				{/* Trollo Logo */}
				<div>
					<Logo />
				</div>

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
											type='email'
											name='email'
											placeholder='Email address'
											value={this.state.email}
											onChange={this.onChange}
											g
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
						<div className='ui message'>
							<div>Give us a try and sign up!</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
