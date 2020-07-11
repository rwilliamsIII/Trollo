import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function ThingsToDo(props) {
    return (

        <div>


            {/* Accordion Component */}
            <Accordion defaultActiveKey="0">
                {/* First Accordion */}

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            To Do!
</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {/* ToDo Form */}
                            <Form.Group>

                                <Form.Control type="text" placeholder="Type your ToDo tasks." />
                                <br />
                                {/* Dive for buttons */}
                                <div className="btn-toolbar">
                                    <Button variant="primary" type="submit">
                                        Save
                    </Button>

                                    <Button variant="primary" type="submit">
                                        Currently Working
                    </Button>

                                    <Button variant="primary" type="submit">
                                        Delete
                    </Button>
                                </div>

                            </Form.Group>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                {/* Second Accordion */}

                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Currently Working On!
</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {/* ToDo Form */}
                            <Form.Group>

                                <Form.Control type="text" placeholder="Type your in progress tasks." />
                                <br />
                                {/* Div for buttons */}
                                <div className="btn-toolbar">
                                    <Button variant="primary" type="submit">
                                        Save
                    </Button>

                                    <Button variant="primary" type="submit">
                                        Revert to To Do
                    </Button>

                                    <Button variant="primary" type="submit">
                                        Completed
                    </Button>

                                    <Button variant="primary" type="submit">
                                        Delete
                    </Button>
                                </div>

                            </Form.Group>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                {/* Third Accordion */}
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Completed Tasks!
</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            {/* ToDo Form */}
                            <Form.Group>

                                <Form.Control type="text" placeholder="Type your completed tasks." />
                                <br />
                                {/* Div for buttons */}
                                <div className="btn-toolbar">
                                    <Button variant="primary" type="submit">
                                        Save
                    </Button>

                                    <Button variant="primary" type="submit">
                                        Revert to To Do
                    </Button>

                                    <Button variant="primary" type="submit">
                                        Revert to In Progress
                    </Button>

                                    <Button variant="primary" type="submit">
                                        Delete
                    </Button>
                                </div>

                            </Form.Group>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>

    )
}

export default ThingsToDo;