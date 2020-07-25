import React from 'react';
import TodosList from './TodosList.js';
import PropTypes from 'prop-types';

const Todos = (props) => {
	let content;

	if(props.todos) {

		if (props.todos.length === 0) {
			content = 'Your todos will display here.';
		} else {
			content = props.todos.map((todo) => {
				return (
					<TodosList
						key={todo._id}
						todo={todo}
						toggleComplete={props.toggleComplete}
					/>
				);
			});
		}
	
		
	} else {
		content = "no todos"
	}
	return <div>{content}</div>;

	
};

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	toggleComplete: PropTypes.func.isRequired,
};

export default Todos;
