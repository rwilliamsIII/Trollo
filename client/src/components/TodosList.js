import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
export class TodosList extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
		};
	};

	componentDidMount = (props) => {
		console.log(this.props.todo);
	};

	render() {
		const { title, description, dueDate, _id } = this.props.todo;
		return (
			<div className='container mt-2'>
				<Accordion style={{ width: '660px', marginLeft: '37%' }}>
					<Card>
						<Card.Header>
							<Accordion.Toggle
								as={Button}
								variant='link'
								eventKey='0'
								style={{ color: 'black' }}
							>
								<div className='font-weight-bolder'>{title}</div>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<div className='font-weight-bold' style={this.getStyle()}>
									{description}
									<br></br>
									Due Date: {dueDate}
								</div>
								<Button
									className='ui medium olive button'
									onClick={this.props.toggleComplete.bind(this, _id)}
									style={{ padding: '5px' }}
								>
									<i class='check icon'></i>
								</Button>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		);
	}
}
TodosList.protoTypes = {
	todo: PropTypes.object.isRequired,
	toggleComplete: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};

export default TodosList;
