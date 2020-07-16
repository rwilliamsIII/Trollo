import React, { Component } from 'react';
import Profile from '../components/Profile';
import LogoutBtn from '../components/LogoutBtn';

import { Redirect } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
//import { response } from 'express';
//import user from '../../../routes/api/user';

class Biocard extends Component {
	state = {
		redirect: false,
	};
	render() {
		return (
			<div>
				<div className='Biocard'>
					<Profile />

					<LogoutBtn />
				</div>
			</div>
		);
	}
}

export default Biocard;
