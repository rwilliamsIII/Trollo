import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container'

function JumbotronTitle() {
    return (
        <div>

            {/* Jumbotron */}

            <Jumbotron fluid>
                <Container>
                    <h1>Trollo</h1>
                    <p>
                        Don't work harder, work smarter!
    </p>
                </Container>
            </Jumbotron>

        </div>
    )
}


export default JumbotronTitle;