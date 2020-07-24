import React, { Component } from 'react';
import Profile from '../components/Profile';
import Axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

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

		Axios.get('/api/user')
			.then((res) => {
				this.setState({
					user: res.data,
				});
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
