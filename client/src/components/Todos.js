import React, {Component} from 'react';
import TodosList from './TodosList.js';
import PropTypes from 'prop-types';



class Todos extends Component {

    render(){
        return(
            this.props.todos.map((todo) => (
                <TodosList key={todo.id} todo={todo} />
            ))
        )
    }
}

TodosList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;