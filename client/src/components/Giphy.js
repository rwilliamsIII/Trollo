import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Giphy extends Component {
    render() {
        // const { url } = this.props.gifs.url
        return (
            <div>
                
                {/* <div className='container'>
                    <img class="ui medium rounded image" src={ url } alt='Trollo Gif'/>
                </div> */}
            </div>
        )
    }
}

Giphy.propTypes = {
    gifs: PropTypes.object.isRequired
}

export default Giphy
