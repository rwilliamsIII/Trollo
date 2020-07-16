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


    // componentDidMount() {
	// 	axios.get('/api/trollos')
	// 	.then(response => {
    //         this.setState({
    //             trollos: response.data.todos
    //         })
	// 		 console.log(response);
	// 	})
	// 	.catch(err => console.log(err.response));
    //     }
        
    //     render(){
    //         return(<p>Hello</p>)
            
    //     }
	// }


function Accordion(props) {
    return (
    <div className='accordion'>{props.children}</div>
    )
}


export default Accordion;