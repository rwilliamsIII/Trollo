import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Accordion from '../components/Accordion'
import Todos from '../components/Todos'
import JumbotronTitle from '../components/JumbotronTitle';
import Biocard from '../components/Biocard';
import { Container, Row, Col } from 'react-grid-system';

class Dashboard extends Component {
	state = {
		redirect: false,
		todos: []
	};

	componentDidMount() {
		axios.get('/api/trollos')
		.then(response => {
            this.setState({
                todos: response.data.todos
            })
			 console.log(response);
		})
		.catch(err => console.log(err.response));
        }
        

	render() {
		return (
			<div className='Dashboard'>
				<Container>
					<Row>
						<Col md={6}>
							<Biocard />
						</Col>

						<Col md={6}>
							<JumbotronTitle />
						</Col>
					</Row>
				</Container>
				<Accordion>
					<Todos />
				</Accordion>
			</div>
		);
	}
}

export default Dashboard;
