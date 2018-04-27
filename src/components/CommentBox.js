import React from 'react'

export default class CommentBox extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			comment: ``,
		}
	}

	// componentWillMount() { }
	// componentWillReceiveProps() { }
	// shouldComponentUpdate() { }
	// componentWillUpdate() { }

	render() {
		return (
			<form
				className={`comment-box`}
				onSubmit={event => this.handleSubmint(event)}
			>
				<textarea
					onChange={event => this.handleChange(event)}
					value={this.state.comment}
				/>
				<button
					actoin={`submit`}
				>
					Submit
				</button>
			</form>
		)
	}

	// componentDidMount() { }
	// getSnapshotBeforeUpdate() { }
	// componentDidUpdate() { }
	// componentWillUnmount() { }

	handleChange(event) {
		this.setState({
			comment: event.target.value
		})
	}

	handleSubmint(event) {
		event.preventDefault()
		this.setState({
			comment: ``
		})
	}
}