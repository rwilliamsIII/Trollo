import React, { Component } from 'react';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';
import authenticate from '../utils/Authenticate';
import LogoutBtn from '../components/LogoutBtn';

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
			<div>
				<div className='Biocard'>
					<div className='ui container'>
						<div className='ui card'>
							<div className='content'>
								<div class='center aligned header'>{user.name}</div>

								<div class='center aligned description'>
									<p>JeLorem ipsum dolor sit amet, et amet facilis pro.</p>
								</div>
							</div>
							<LogoutBtn />
							<div class='extra content'>
								<div class='center aligned author'>
									<i class='user icon'></i>

									<p>{user.email}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
