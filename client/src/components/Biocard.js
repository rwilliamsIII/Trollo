import React, { Component } from 'react';
import Profile from '../components/Profile';
import LogoutBtn from '../components/LogoutBtn';
import Axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

class Biocard extends Component {
	state = {
		redirect: false,
		user: {},
	};

	componentDidMount() {
		console.log(this.state);
		const token = localStorage.getItem('trollo');

		if (token) {
			setAuthToken(token);
		}
		console.log(this.state);
		Axios.get('/api/user')
			.then((res) => {
				const user = res.data;
				console.log(user);
				this.setState({
					user: res.data,
				});
				console.log(this.state);
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<div className='Biocard'>
					<Profile />
				</div>
			</div>
		);
	}
}

export default Biocard;
