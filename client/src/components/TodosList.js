import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Accordion, Card, Button } from 'react-bootstrap'


export class TodosList extends Component {
        

    componentDidMount = (props) => {
        console.log(this.props.todo)
    }

render(){
    const { title, description } = this.props.todo;
        return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        { title }
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        { description }
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        )

}
    
}

TodosList.protoTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodosList;