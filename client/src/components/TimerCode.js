import React, { Component } from 'react'

class TimerCode extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	render() {
		const { count } = this.state
		return (
			<div>
				<h1> Current Count: {count} </h1>
			</div>
		)
	}
	//setInterval
	//clearInterval
	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count + 1
			}))
		}, 1000)
	}
	componentWillUnmount() {
		clearInterval(this.myInterval)
	}
}

export default TimerCode
