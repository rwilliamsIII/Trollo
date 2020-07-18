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
								<div class='center aligned header'>{user.name}</div>

								<div class='center aligned description'></div>
							</div>

							<div class='extra content'>
								<div class='center aligned author'>
									<i class='user icon'></i>

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
