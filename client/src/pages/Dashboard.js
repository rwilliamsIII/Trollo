import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Todos from '../components/Todos';
// import JumbotronTitle from '../components/JumbotronTitle';
import Biocard from '../components/Biocard';
// import AddTodo from '../components/AddTodo';
import { Container, Row, Col } from 'react-grid-system';


class Dashboard extends Component {
	state = {
		redirect: false,
		todos: [],
		title: '',
		description: '',
		dueDate: '',
	};

	componentDidMount() {
		axios
			.get('/api/user')
			.then((res) => this.setState({ todos: res.data.todos }));
	}

	onChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value,
		});

	onSubmit = (e) => {
		const newTodo = {
			title: this.state.title,
			description: this.state.description,
			dueDate: this.state.dueDate,
		};

		axios.post('/api/trollos', newTodo)
		.then((res) => {
			this.setState({title: '', description: '', dueDate: ''});
		})
	};





	toggleComplete = title => {
		console.log(title)
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.title === title) {
					todo.completed = !todo.completed
				}
				return todo;
			})
		})
	};


	// deleteTodo = id => {
	// 	this.setState({
	// 		todos: this.state.todos.filter()
	// 	})
	// }
        


	render() {
		return (
			<div className='Dashboard'>
				<Container>
					<Row>
						<Col md={4}>
							<Biocard />
						</Col>

						<Col md={8}>

						<div>
				<div className='ui middle aligned center aligned grid'>
					<div className='column'>
						<form className='ui large form' onSubmit={this.onSubmit}>
							<div className='ui stacked secondary segment'>
								<div className='content'></div>
								<div className='field'>
									<div className='ui left icon input'>
										<i className='edit outline icon'></i>
										<input
											type='text'
											name='title'
											placeholder='Item Title'
											value={this.state.title}
											onChange={this.onChange}
										/>
									</div>
								</div>
								<div className='field'>
									<div className='ui left icon input'>
										<i className='edit outline icon'></i>
										<input
											type='text'
											name='description'
											placeholder='Enter Description'
											value={this.state.description}
											onChange={this.onChange}
										/>
									</div>
								</div>
								<div className='field'>
									<div className='ui left icon input'>
										<i className='calendar alternate outline icon'></i>
										<input
											type='date'
											name='dueDate'
											placeholder='Enter Date'
											value={this.state.dueDate}
											onChange={this.onChange}
										/>
									</div>
								</div>
								<input type='submit' className='ui fluid large olive button' />
							</div>
						</form>
					</div>
				</div>
			</div>
						</Col>
					</Row>
				</Container>
					<Todos
						todos={this.state.todos}
						toggleComplete={this.toggleComplete}
						deleteTodo={this.deleteTodo}
					/>
				</div>
			
		);
	}
}

export default Dashboard;
