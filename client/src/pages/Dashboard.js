import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ThingsToDo from '../components/ThingsToDo';
import JumbotronTitle from '../components/JumbotronTitle';
import Biocard from '../components/Biocard';
import { Container, Row, Col } from 'react-grid-system';



class Dashboard extends Component {
	state = {
		redirect: false,
	};

	// componentDidMount() {
	// 	axios.get('/api/user')
	// 	.then(response => {
	// 		 console.log(response);
	// 	})
	// 	.catch(err => console.log(err.response));
	// 	}
	// }

	handleLogout = () => {
		localStorage.removeItem('example-app');
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
			<div className='Dashboard'>
				<Container>

					<Row>

						<Col md={6} >
							<Biocard />
						</Col>

						<Col md={6}>
							<JumbotronTitle />
						</Col>

					</Row>

				</Container>
				<ThingsToDo />
			</div>
		);
	}
}

export default Dashboard;
