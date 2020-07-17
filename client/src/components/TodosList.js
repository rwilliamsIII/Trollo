import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Axios from 'axios';


export class TodosList extends Component {
        

    componentDidMount = (props) => {
        console.log(this.props.todo)
    }

render(){
    const { title, description } = this.props.todo;
        return (
        <div>
            <p>{ title }</p>
            <p>{ description }</p>
        </div>
        )

}
    
}

TodosList.protoTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodosList;