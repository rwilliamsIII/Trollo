import React, { Component } from 'react';
import axios from 'axios';
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button';
// import Accordion from 'react-bootstrap/Accordion';
// import Form from 'react-bootstrap/Form';




// class Accordion extends Component{
//     state = {
//         trollos: [],
//     }


    



function Accordion(props) {
    return (
    <div className='accordion'>{props.children}</div>
    )
}


export default Accordion;