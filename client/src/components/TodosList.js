import React, { Component } from 'react'
import PropTypes from 'prop-types'


class TodosList extends Component {
    render() {
        return (
        <div>
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">{this.props.todo.title}</button>
                    </h2>
                </div>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">{this.props.todo.description}{this.props.todo.dueDate}</div>
            </div>
        </div>
        )
    }
}

TodosList.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodosList;