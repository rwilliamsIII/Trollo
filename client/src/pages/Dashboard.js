import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Todos from '../components/Todos';
// import JumbotronTitle from '../components/JumbotronTitle';
import Biocard from '../components/Biocard';
// import AddTodo from '../components/AddTodo';
import { Container, Row, Col } from 'react-grid-system';
// import { Giphy } from '../components/Giphy';


const gifCollection = {
	excited: 'https://tenor.com/view/minion-woohoo-yeah-excited-cheer-gif-5002827',
	productive: 'https://tenor.com/view/typing-jim-carrey-fast-busy-gif-4903969',
	lazy: 'https://tenor.com/view/garfield-gif-10611577'
}

class Dashboard extends Component {
	state = {
		redirect: false,
		todos: [],
		title: '',
		description: '',
		dueDate: '',
		excited: true,
		productive: false,
		lazy: false
	};

	componentDidMount() {
		axios.get('/api/user').then((res) => this.setState({ todos: res.data.todos }));
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
				this.setState({ title: '', description: '', dueDate: '' });
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
				<br></br>
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

					<br></br>
					<br></br>
				<Row>
					<Col md={4}>
					<Todos
						todos={this.state.todos}
						toggleComplete={this.toggleComplete}
						deleteTodo={this.deleteTodo}
					/>
					</Col>
					<Col md={8}>
						<div className='container'>
                    		<h2>How are ya feeling today?</h2>
                    			<img class="ui medium rounded image" src={gifCollection[gifName]} alt='Trollo Gif' style={{height: '400px', width: '400px'}}/>
                    			<button className='ui large olive button'>Productive</button>
                    			<button className='ui large olive button'>Excited</button>
                    			<button className='ui large olive button'>Lazy</button>
                		</div>
					</Col>
				</Row>
				</Container>
					
				</div>
			

				
		);
	}
}

export default Dashboard;
