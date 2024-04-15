import React, {Component} from 'react';

class Counter extends Component {
	render() {
		return <div>Clicks: {this.props.count}</div>;
	}
}

export default Counter;
