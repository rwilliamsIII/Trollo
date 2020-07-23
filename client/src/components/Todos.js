import React, { Component } from 'react';
import TodosList from './TodosList.js';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<TodosList
				key={todo._id}
				todo={todo}
				toggleComplete={this.props.toggleComplete}
			/>
		));
	}
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default Todos;
