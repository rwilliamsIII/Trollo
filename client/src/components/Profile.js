import React, { Component } from 'react';
import axios from 'axios';
import LogoutBtn from '../components/LogoutBtn';
import { ReactComponent as Logo } from '../img/trollo-logo-01.svg';

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false,
			user: {},
		};
	}
	componentDidMount() {
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
							<Logo />
							<div className='content'>
								<div className='center aligned header'>{user.name}</div>

								<div className='center aligned description'></div>
							</div>

							<div className='extra content'>
								<div className='center aligned author'>
									<i className='user icon'></i>

									<p>{user.email}</p>
								</div>
								<br></br>
								<LogoutBtn />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
