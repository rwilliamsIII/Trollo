import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
	state = {
		redirect: false,
		newTodo: {
		title: '',
		description: '',
		dueDate: '',
		}
		

	};

	onChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value,
		});

	onSubmit = (e) => {
		const { title, description, dueDate } = this.state
		e.preventDefault();
		this.props.addTodo({title, description, dueDate});
		this.setState({title: '', description: '', dueDate: ''});

		// this.props.AddTodo(this.state.description),
		// 	this.setState({ description: '' });

		// this.props.AddTodo(this.state.dueDate), this.setState({ dueDate: '' });
	};

	render() {
		return (
			<div>
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
			</div>
		);
	}
}
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
};
export default AddTodo;
