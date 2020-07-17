import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Todos from '../components/Todos'
// import JumbotronTitle from '../components/JumbotronTitle';
import Biocard from '../components/Biocard';
import AddTodo from '../components/AddTodo';
import { Container, Row, Col } from 'react-grid-system';


class Dashboard extends Component {
	state = {
		redirect: false,
		todos: []
	};


	componentDidMount() {
		axios.get('/api/user')
		.then(res => this.setState({ todos: res.data.todos }));
	}
		

	addTodo = newTodo => {
		axios.post('/api/trollos', {
			newTodo,
		}).then(res => this.setState({todos: [...this.state.todos, res.data]}))
	
	};
        

	render() {
		return (
			<div className='Dashboard'>
				<Container>
					<Row>
						<Col md={4}>
							<Biocard />
						</Col>

						<Col md={8}>
							<AddTodo addTodo={this.addTodo}/>
						</Col>
					</Row>
				</Container>
					<Todos
						todos={this.state.todos}
					/>
			</div>
		);
	}
}

export default Dashboard;
