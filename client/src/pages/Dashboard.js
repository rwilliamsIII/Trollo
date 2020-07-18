import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Todos from '../components/Todos'
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
		dueDate: ''
	};


	componentDidMount() {
		axios.get('/api/user')
		.then(res => this.setState({ todos: res.data.todos }));
	}
		

	// addTodo = newTodo => {
	// 	axios.post('/api/trollos', {
	// 		newTodo
	// 	}).then(res => this.setState({todos: [...this.state.todos, res.data]}))
	
	// };
	onChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value,
		});

	onSubmit = (e) => {
		e.preventDefault();
		const newTodo = {
			title: this.state.title,
			description: this.state.description,
			dueDate: this.state.dueDate
		};
		axios.post('/api/trollos', newTodo)
		.then((res) => {
			this.setState({title: '', description: '', dueDate: ''});
		})
		

		// this.props.AddTodo(this.state.description),
		// 	this.setState({ description: '' });

		// this.props.AddTodo(this.state.dueDate), this.setState({ dueDate: '' });
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
						<div className='ui middle aligned center aligned grid'>
					<div className='column'>
						<h2 className='ui image header'>
							<div className='content'>Add Item</div>
						</h2>
						<form className='ui large form' onSubmit={this.onSubmit}>
							<div className='ui stacked secondary segment'>
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
											value={this.state.edescription}
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
							</div>
							<input type='submit' className='ui fluid large olive button' />
						</form>
					</div>
				</div>
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
