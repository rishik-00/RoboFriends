import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			haserror: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true})
	}	

	render() {
			if(this.state.hasError){
				return <h1>Ooooops. Error has occured</h1>
			}
			return this.props.children
	}
}



export default ErrorBoundary;