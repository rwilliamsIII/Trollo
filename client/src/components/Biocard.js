import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Biocard extends Component {
	state = {
		redirect: false,
	};

	handleLogout = () => {
		localStorage.removeItem('trollo');
		this.setState({
			redirect: true,
		});
	};

	render() {
		const { redirect } = this.state;
		if (redirect) {
			return <Redirect to='/' />;
		}

		return (
			<div className='Biocard'>
				<div className='ui container'></div>
				<h1>Dashboard</h1>
				<p>Welcome, name</p>
				<p>Email Address:</p>
				<div className='ui teal button' onClick={this.handleLogout}>
					Logout
				</div>
			</div>
		);
	}
}

export default Biocard;
